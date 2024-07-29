import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Footer } from './Footer';
import { Header } from './Header';

export const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([
    { id: 1, name: 'Music Festival', date: new Date('2024-07-30'), location: { lat: 37.7749, lng: -122.4194 } },
    { id: 2, name: 'Craft Fair', date: new Date('2024-07-31'), location: { lat: 37.7749, lng: -122.4194 } },
    // Add more events here as needed
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentEvents, setCurrentEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    const ongoingEvents = events.filter(event => event.date.toDateString() === today.toDateString());
    setCurrentEvents(ongoingEvents);
  }, [events]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Header />
      <div className="flex flex-col items-center flex-grow p-4 relative">
        {/* Current Event Message */}
        {currentEvents.length > 0 && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-center p-2 rounded-lg shadow-md z-50">
            {currentEvents.map(event => (
              <span key={event.id} className="block">{event.name} is happening right now</span>
            ))}
          </div>
        )}

        {/* Search */}
        <input
          type="text"
          placeholder="Search places"
          className="p-2 rounded border mb-4 w-full max-w-md mt-12"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Map */}
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={{ lat: 37.7749, lng: -122.4194 }}
            zoom={10}
          >
            {events.map(event => (
              <Marker key={event.id} position={event.location} />
            ))}
          </GoogleMap>
        </LoadScript>

        {/* Title and Description */}
        <h2 className="text-2xl font-bold mt-6">Special Events</h2>
        <p className="text-center max-w-2xl mt-2">
          Here you can see the special events that will take place in Circacia. Discover what's happening and participate in them.
        </p>

        {/* Event Invitations */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8">
          {events.map(event => (
            <div key={event.id} className="border rounded-lg p-4 shadow-md bg-white">
              <h3 className="font-semibold">{event.name}</h3>
              <p>{event.date.toDateString()}</p>
              <p>Location: {event.location.lat}, {event.location.lng}</p>
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="mt-8">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={({ date }) => {
              const hasEvent = events.some(event => event.date.toDateString() === date.toDateString());
              return hasEvent ? 'bg-yellow-300' : null;
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
