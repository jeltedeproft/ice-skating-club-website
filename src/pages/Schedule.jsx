import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  { title: 'Beginner Lesson', start: new Date(2025, 7, 20, 10, 0), end: new Date(2025, 7, 20, 11, 0) },
  // Add more
];

function Schedule() {
  return <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500 }} />;
}

export default Schedule;