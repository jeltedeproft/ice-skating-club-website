import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ical from "ical";

const localizer = momentLocalizer(moment);

function ClubCalendar() {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const icalUrl =
      "https://calendar.google.com/calendar/ical/jeltedeproft11%40gmail.com/public/basic.ics";

    fetch(icalUrl)
      .then((res) => res.text())
      .then((data) => {
        const parsed = ical.parseICS(data);
        const evs = Object.values(parsed).map((ev) => ({
          title: ev.summary,
          start: new Date(ev.start),
          end: new Date(ev.end),
        }));
        setEvents(evs);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          view={view}
          onView={setView}
          date={date}
          onNavigate={setDate}
          style={{ height: 600 }}
          className="text-gray-800 rounded-xl"
        />
      </div>
    </div>
  );
}

export default ClubCalendar;
