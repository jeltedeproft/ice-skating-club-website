import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date(2025, 7, 20)); // August 20, 2025

  const onViewChange = (newView) => {
    setView(newView);
  };

  const onNavigate = (action) => {
    let newDate = moment(date);
    switch (view) {
      case Views.DAY:
        newDate.add(action === 'NEXT' ? 1 : -1, 'day');
        break;
      case Views.WEEK:
        newDate.add(action === 'NEXT' ? 1 : -1, 'week');
        break;
      case Views.MONTH:
      case Views.AGENDA:
      default:
        newDate.add(action === 'NEXT' ? 1 : -1, 'month');
        break;
    }
    setDate(newDate.toDate());
  };

  const currentMonthYear = moment(date).format('MMMM YYYY');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      <div className="relative w-full h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80")',
            filter: 'blur(4px)',
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-blue-900/50 p-4 rounded-lg">
            Kalender
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            view={view}
            onView={onViewChange}
            date={date}
            onNavigate={onNavigate}
            style={{ height: 600 }}
            className="text-gray-800 rounded-xl"
            eventPropGetter={(event) => ({
              style: {
                background: 'linear-gradient(45deg, #3B82F6, #60A5FA)',
                color: 'white',
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              },
            })}
            components={{
              toolbar: (props) => (
                <div className="rbc-toolbar bg-white/80 backdrop-blur-md p-4 rounded-t-xl flex flex-col items-center mb-4 border-b border-blue-200/50">
                  <h2 className="text-2xl font-bold text-blue-900 mb-3">{currentMonthYear}</h2>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => onNavigate('PREV')}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition duration-200"
                    >
                      Vorige
                    </button>
                    <button
                      onClick={() => onNavigate('NEXT')}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition duration-200"
                    >
                      Volgende
                    </button>
                    <button
                      onClick={() => onViewChange(Views.DAY)}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition duration-200"
                    >
                      Dag
                    </button>
                    <button
                      onClick={() => onViewChange(Views.WEEK)}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition duration-200"
                    >
                      Week
                    </button>
                    <button
                      onClick={() => onViewChange(Views.MONTH)}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition duration-200"
                    >
                      Maand
                    </button>
                    <button
                      onClick={() => onViewChange(Views.AGENDA)}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition duration-200"
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
          <a href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200">Contacteer ons</a> voor meer info.
        </p>
      </div>
    </div>
  );
}

export default ClubCalendar;