import { useState } from "react";
import { useRouter } from "next/router";

const categories = ["sports", "technology", "food", "art"];

function EventList({ eventList }) {
  const router = useRouter();
  const [events, setEvents] = useState(eventList);

  const fetchEvents = async (category) => {
    const response = await fetch(
      `http://localhost:4000/events?category=${category}`
    );
    const data = await response.json();

    setEvents(data);
    router.push(`/events?category=${category}`, undefined, { shallow: true });
  };

  return (
    <div>
      {categories.map((category) => {
        return (
          <button
            key={category}
            onClick={() => fetchEvents(category)}
            style={{ marginRight: "10px" }}
          >
            {category}
          </button>
        );
      })}

      <h1>List of events</h1>

      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id}. {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;

  const queryString = category ? `?category=${category}` : "";

  const response = await fetch("http://localhost:4000/events" + queryString);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
