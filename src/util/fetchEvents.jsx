import axios from 'axios';

// Use a more reliable CORS proxy for development
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

// Fetch and parse events from Belgian Figure Skating Federation
export const fetchBelgianEvents = async () => {
  const currentYear = new Date().getFullYear();
  const url = `${CORS_PROXY}https://www.kbkfwedstrijden.be/Belgian%20competitions%20${currentYear}.html`;

  try {
    const response = await axios.get(url, { 
      withCredentials: false,
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
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
  const rows = doc.querySelectorAll('table tr'); // Adjust selector after inspecting HTML
  const events = [];

  if (rows.length <= 1) {
    console.warn('No table rows found for Belgian events. Check selector or HTML.');
  }

  rows.forEach((row, index) => {
    if (index === 0) return; // Skip header
    const cells = row.querySelectorAll('td');
    if (cells.length >= 4) {
      const dateStr = cells[0].textContent.trim();
      const name = cells[1].textContent.trim();
      const location = cells[2].textContent.trim();
      const details = cells[3].textContent.trim();

      // Parse date (e.g., "21 and 22 November 2025" or "13 December 2025")
      let startDate, endDate;
      if (dateStr.includes('and')) {
        const [startDay, endDay] = dateStr.split(' and ').map(d => d.trim());
        startDate = new Date(`${startDay} ${year}`);
        endDate = new Date(`${endDay} ${year}`);
      } else {
        startDate = new Date(dateStr);
        endDate = new Date(dateStr);
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
        console.warn(`Invalid date for event "${name}": ${dateStr}`);
      }
    }
  });

  return events;
};

// Fetch and parse events from Short Track Online
export const fetchShortTrackEvents = async () => {
  const currentYear = new Date().getFullYear();
  const url = `${CORS_PROXY}https://www.shorttrackonline.info/competitions.php?ctry=BEL&season=${currentYear}-${currentYear + 1}`;

  try {
    const response = await axios.get(url, { 
      withCredentials: false,
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
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
  const rows = doc.querySelectorAll('table tr'); // Adjust selector if not table-based
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

      // Parse date (e.g., "28 Sep 2025" or "28-30 Sep 2025")
      let startDate, endDate;
      if (dateStr.includes('-')) {
        const [start, end] = dateStr.split('-').map(d => d.trim());
        startDate = new Date(start);
        endDate = new Date(end || start); // Use start if end is same day
      } else {
        startDate = new Date(dateStr);
        endDate = new Date(dateStr);
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
        console.warn(`Invalid date for event "${name}": ${dateStr}`);
      }
    }
  });

  return events;
};