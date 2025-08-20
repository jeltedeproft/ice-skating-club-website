import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Add this

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Wintershow',
    start: new Date(2025, 11, 15, 18, 0),
    end: new Date(2025, 11, 15, 20, 0),
  },
  {
    title: 'Synchroon Competitie',
    start: new Date(2025, 11, 20, 14, 0),
    end: new Date(2025, 11, 20, 16, 0),
  },
  {
    title: 'Initiatiedag',
    start: new Date(2025, 10, 10, 10, 0),
    end: new Date(2025, 10, 10, 12, 0),
  },
];

function ClubCalendar() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Kalender</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Bekijk onze aankomende evenementen en trainingen.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          className="text-gray-700"
        />
      </div>
      <p className="text-center mt-6 text-gray-600">
        <a href="/contact" className="text-blue-600 hover:underline">Contacteer ons</a> voor meer info.
      </p>
    </div>
  );
}

export default ClubCalendar;