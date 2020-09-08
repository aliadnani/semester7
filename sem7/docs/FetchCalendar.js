import { useState, useEffect } from "react";
export const CalendarData = ({calendarId}) => {
  const [calendar, setCalendar] = useState(null);
  useEffect(() => {
    const fetchCalendar = () => {
      fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=AIzaSyA4mHoOnf6f5BvCGU98QSM6JhuZVgbq8h0&timeMin=${new Date().toJSON()}`
      )
        .then((result) => result.json())
        .then((data) => setCalendar(data));
    };
    fetchCalendar();
  }, []);
  if (!calendar) {
    return <h1>Fetching calendar...</h1>;
  }
  return (
    <ul>
      {calendar.items.map((item) => (
        <li key>{item.summary} on <b>{new Date(item.start.date).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</b></li>
      ))}
    </ul>
  );
};