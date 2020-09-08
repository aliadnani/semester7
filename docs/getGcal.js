async function getEvents(apiKey, calendarId) {
  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${new Date().toJSON()}`
  );
  const data = await res.json();
  return data;
}

function main() {
  const calData = getEvents(
    "AIzaSyA4mHoOnf6f5BvCGU98QSM6JhuZVgbq8h0",
    "9bi9qfcqmc640gh0gsiu3cqhck@group.calendar.google.com"
  );
}

main();
