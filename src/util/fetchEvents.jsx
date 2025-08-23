import axios from 'axios';
import { DateTime } from 'luxon';

// Use CORS proxy for development (temporary until backend is implemented)
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

// Fetch and parse events from Belgian Figure Skating Federation
export const fetchBelgianEvents = async () => {
  const currentYear = new Date().getFullYear();
  const url = `${CORS_PROXY}https://www.kbkfwedstrijden.be/Belgian%20competitions%20${currentYear}.html`;

  try {
    const response = await axios.get(url);
    const events = parseBelgianEvents(response.data, currentYear);
    if (events.length === 0) {
      console.warn('No Belgian events parsed. HTML structure may have changed.');
      console.log('Raw HTML:', response.data);
    }
    return events;
  } catch (error) {
    console.error('Error fetching Belgian events:', error.message);
    return [];
  }
};

// Parse Belgian events from HTML (assumes table with Date | Name | Location | Details)
const parseBelgianEvents = (html, year) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const rows = doc.querySelectorAll('table tr'); // Adjust selector if needed
  const events = [];

  if (rows.length <= 1) {
    console.warn('No table rows found for Belgian events. Check selector or HTML.');
  }

  rows.forEach((row, index) => {
    if (index === 0) return; // Skip header
    const cells = row.querySelectorAll('td');
    if (cells.length < 4) {
      console.warn(`Row ${index + 1} has insufficient cells:`, cells);
      return;
    }

    const dateStr = cells[0].textContent.trim();
    const name = cells[1].textContent.trim();
    const location = cells[2].textContent.trim();
    const details = cells[3].textContent.trim();

    // Skip rows with empty name or date
    if (!name || !dateStr) {
      console.warn(`Skipping row ${index + 1} due to empty name or date:`, { name, dateStr });
      return;
    }

    // Normalize month names to title case (e.g., "february" → "February")
    const cleanDateStr = dateStr
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b([a-z]+)\b/g, (match) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase());

    // Parse date (e.g., "21 and 22 November 2025", "7, 8 and 9 November 2025", "28 February, 1 March 2025")
    let startDate, endDate;
    const dateMatch = cleanDateStr.match(/^(\d{1,2}(?:,\s*\d{1,2}|(?:\s*and\s*\d{1,2}))*)(?:\s*,\s*(\d{1,2}\s+[A-Za-z]+\s+\d{4}))?\s+([A-Za-z]+)\s+(\d{4})$/);
    if (!dateMatch) {
      console.warn(`Invalid date format for event "${name}": ${cleanDateStr}`);
      return;
    }

    const daysStr = dateMatch[1]; // e.g., "21 and 22" or "7, 8 and 9"
    const crossMonthEnd = dateMatch[2]; // e.g., "1 March 2025" or undefined
    const month = dateMatch[3]; // e.g., "November"
    const eventYear = dateMatch[4]; // e.g., "2025"

    // Extract all days
    const days = daysStr
      .replace(' and ', ',')
      .split(',')
      .map(day => day.trim())
      .filter(day => day.match(/^\d{1,2}$/)); // Only valid day numbers

    if (days.length === 0) {
      console.warn(`No valid days found for event "${name}": ${cleanDateStr}`);
      return;
    }

    // Parse start date
    startDate = DateTime.fromFormat(`${days[0]} ${month} ${eventYear}`, 'd MMMM yyyy').toJSDate();

    // Parse end date
    if (crossMonthEnd) {
      endDate = DateTime.fromFormat(crossMonthEnd, 'd MMMM yyyy').toJSDate();
    } else {
      endDate = DateTime.fromFormat(`${days[days.length - 1]} ${month} ${eventYear}`, 'd MMMM yyyy').toJSDate();
    }

    // Validate dates
    if (!isNaN(startDate) && !isNaN(endDate)) {
      events.push({
        title: `${name} (${details})`,
        start: startDate,
        end: endDate,
        allDay: true,
        resource: { location, source: 'Belgian Figure Skating' },
      });
    } else {
      console.warn(`Invalid date for event "${name}": ${cleanDateStr}, start: ${startDate}, end: ${endDate}`);
    }
  });

  return events;
};

// Fetch and parse events from Short Track Online
export const fetchShortTrackEvents = async () => {
  const currentYear = new Date().getFullYear();
  const url = `${CORS_PROXY}https://www.shorttrackonline.info/competitions.php?ctry=BEL&season=${currentYear}-${currentYear + 1}`;

  try {
    const response = await axios.get(url);
    const events = parseShortTrackEvents(response.data);
    if (events.length === 0) {
      console.warn('No Short Track events parsed. HTML structure may have changed.');
      console.log('Raw HTML:', response.data);
    }
    return events;
  } catch (error) {
    console.error('Error fetching Short Track events:', error.message);
    return [];
  }
};

// Parse Short Track events (assumes table with Date | Name | Location | Country | Details)
const parseShortTrackEvents = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const rows = doc.querySelectorAll('table tr');
  const events = [];

  if (rows.length <= 1) {
    console.warn('No table rows found for Short Track events. Check selector or HTML.');
  }

  rows.forEach((row, index) => {
    if (index === 0) return; // Skip header
    const cells = row.querySelectorAll('td');
    if (cells.length >= 5) {
      const dateStr = cells[0].textContent.trim();
      const name = cells[1].textContent.trim();
      const location = cells[2].textContent.trim();
      const details = cells[4].textContent.trim();

      // Skip rows with empty name or date
      if (!name || !dateStr) {
        console.warn(`Skipping row ${index + 1} due to empty name or date:`, { name, dateStr });
        return;
      }

      // Normalize month names to title case (e.g., "oct" → "Oct")
      const cleanDateStr = dateStr
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b([a-z]+)\b/g, (match) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase());

      // Parse date (e.g., "17-19 Oct 2025", "1 Nov 2025", "6-22 Feb 2026")
      let startDate, endDate;
      if (cleanDateStr.includes('-')) {
        // Range format (e.g., "17-19 Oct 2025")
        const [start, end] = cleanDateStr.split('-').map(d => d.trim());
        const startMatch = start.match(/^\d{1,2}$/) ? `${start} ${end.replace(/^\d{1,2}\s+/, '')}` : start;
        startDate = DateTime.fromFormat(startMatch, 'd MMM yyyy').toJSDate();
        endDate = DateTime.fromFormat(end, 'd MMM yyyy').toJSDate();
      } else {
        // Single date (e.g., "1 Nov 2025")
        startDate = DateTime.fromFormat(cleanDateStr, 'd MMM yyyy').toJSDate();
        endDate = startDate;
      }

      // Validate dates
      if (!isNaN(startDate) && !isNaN(endDate)) {
        events.push({
          title: `${name} (${details})`,
          start: startDate,
          end: endDate,
          allDay: true,
          resource: { location, source: 'Short Track Online' },
        });
      } else {
        console.warn(`Invalid date for event "${name}": ${cleanDateStr}, start: ${startDate}, end: ${endDate}`);
      }
    }
  });

  return events;
};