import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const localizer = momentLocalizer(moment);

function ClubCalendar() {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const AIRTABLE_PERSONAL_ACCESS_TOKEN = import.meta.env.VITE_AIRTABLE_PAT;
    const AIRTABLE_BASE = import.meta.env.VITE_AIRTABLE_BASE;
    const AIRTABLE_TABLE = import.meta.env.VITE_AIRTABLE_TABLE;

    if (!AIRTABLE_PERSONAL_ACCESS_TOKEN || !AIRTABLE_BASE || !AIRTABLE_TABLE) {
      console.error("Error: Missing Airtable environment variables!");
      return;
    }

    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`;
    console.log("Debug: Axios URL:", url);

    axios.get(url, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_PERSONAL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then(res => {
        console.log("Debug: Airtable raw response:", res.data);
        const evs = res.data.records.map(r => ({
          title: r.fields.Title,
          start: new Date(r.fields.Start),
          end: new Date(r.fields.End),
        }));
        console.log("Debug: Parsed events:", evs);
        setEvents(evs);
      })
      .catch(err => {
        console.error("Error fetching Airtable events:", err);
      });
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient">
      <div className="relative w-full h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg")',
            filter: "blur(1px)",
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
            onView={setView}
            date={date}
            onNavigate={setDate}
            style={{ height: 600 }}
            className="text-gray-800 rounded-xl"
            eventPropGetter={(event) => ({
              style: {
                background: "linear-gradient(45deg, #3B82F6, #60A5FA)",
                color: "white",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              },
            })}
            components={{
              toolbar: (props) => (
                <div className="rbc-toolbar bg-white/80 backdrop-blur-md p-4 rounded-t-xl flex flex-col items-center mb-4 border-b border-blue-200/50">
                  <h2 className="text-2xl font-bold text-blue-900 mb-3">
                    {moment(date).format("MMMM YYYY")}
                  </h2>
                  <div className="flex space-x-3">
                    <button
                      onClick={() =>
                        setDate(moment(date).subtract(1, "month").toDate())
                      }
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition duration-200"
                    >
                      Vorige
                    </button>
                    <button
                      onClick={() =>
                        setDate(moment(date).add(1, "month").toDate())
                      }
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition duration-200"
                    >
                      Volgende
                    </button>
                  </div>
                </div>
              ),
            }}
          />
        </div>
        <p className="text-center mt-6 text-gray-600">
          <a
            href="/contact"
            className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200"
          >
            Contacteer ons
          </a>{" "}
          voor meer info.
        </p>
      </div>
    </div>
  );
}

export default ClubCalendar;
