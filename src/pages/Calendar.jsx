import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Wintershow',
    start: new Date(2025, 11, 15, 18, 0), // December 15, 2025, 6:00 PM
    end: new Date(2025, 11, 15, 20, 0),   // December 15, 2025, 8:00 PM
  },
  {
    title: 'Synchroon Competitie',
    start: new Date(2025, 11, 20, 14, 0), // December 20, 2025, 2:00 PM
    end: new Date(2025, 11, 20, 16, 0),   // December 20, 2025, 4:00 PM
  },
  {
    title: 'Initiatiedag',
    start: new Date(2025, 10, 10, 10, 0), // November 10, 2025, 10:00 AM
    end: new Date(2025, 10, 10, 12, 0),   // November 10, 2025, 12:00 PM
  },
];

function ClubCalendar() {
  const [view, setView] = useState(Views.MONTH); // Default to Month view

  const onViewChange = (newView) => {
    setView(newView);
  };

  // Get current month and year (August 2025)
  const currentMonthYear = moment().format('MMMM YYYY'); // e.g., "August 2025"

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Kalender</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Bekijk onze aankomende evenementen en trainingen.
      </p>
      <p className="text-center text-gray-600 mb-4">
        Schakel tussen <strong>Dag</strong>, <strong>Week</strong>, <strong>Maand</strong>, en <strong>Agenda</strong> (een lijstweergave van evenementen).
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          view={view}
          onView={onViewChange}
          defaultDate={new Date(2025, 7, 20)} // August 20, 2025 (current date)
          style={{ height: 500 }}
          className="text-gray-700 rounded-md"
          eventPropGetter={() => ({
            style: {
              backgroundColor: '#1E40AF', // Tailwind blue-800
              color: 'white',
              borderRadius: '4px',
            },
          })}
          components={{
            toolbar: (props) => (
              <div className="rbc-toolbar bg-blue-50 p-2 rounded-t-md flex flex-col items-center">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">{currentMonthYear}</h2>
                <div>
                  <button
                    onClick={() => onViewChange(Views.DAY)}
                    className="mr-2 px-3 py-1 bg-white text-blue-600 hover:bg-blue-100 rounded-md"
                  >
                    Dag
                  </button>
                  <button
                    onClick={() => onViewChange(Views.WEEK)}
                    className="mr-2 px-3 py-1 bg-white text-blue-600 hover:bg-blue-100 rounded-md"
                  >
                    Week
                  </button>
                  <button
                    onClick={() => onViewChange(Views.MONTH)}
                    className="mr-2 px-3 py-1 bg-white text-blue-600 hover:bg-blue-100 rounded-md"
                  >
                    Maand
                  </button>
                  <button
                    onClick={() => onViewChange(Views.AGENDA)}
                    className="px-3 py-1 bg-white text-blue-600 hover:bg-blue-100 rounded-md"
                  >
                    Agenda
                  </button>
                </div>
              </div>
            ),
          }}
        />
      </div>
      <p className="text-center mt-6 text-gray-600">
        <a href="/contact" className="text-blue-600 hover:underline">Contacteer ons</a> voor meer info.
      </p>
    </div>
  );
}

export default ClubCalendar;