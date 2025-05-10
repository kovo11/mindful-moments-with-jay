
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  spotsAvailable: number;
  price: number;
  isFeatured?: boolean;
}

interface EventsSectionProps {
  openBooking: () => void;
}

const events: EventProps[] = [
  {
    title: "New York Mindfulness Workshop",
    date: "June 15, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "New York City",
    venue: "Lincoln Center",
    spotsAvailable: 75,
    price: 499,
    isFeatured: true
  },
  {
    title: "Los Angeles Meditation Retreat",
    date: "July 8, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Los Angeles",
    venue: "The Ritz-Carlton",
    spotsAvailable: 50,
    price: 599
  },
  {
    title: "London Purpose Discovery",
    date: "August 21, 2025",
    time: "6:30 PM - 9:30 PM",
    location: "London",
    venue: "The Savoy",
    spotsAvailable: 60,
    price: 449
  },
  {
    title: "Toronto Wisdom Session",
    date: "September 3, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Toronto",
    venue: "Four Seasons Hotel",
    spotsAvailable: 45,
    price: 399
  },
  {
    title: "Sydney Inner Growth Journey",
    date: "October 17, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Sydney",
    venue: "Sydney Opera House",
    spotsAvailable: 80,
    price: 549
  },
  {
    title: "Singapore Mind Mastery",
    date: "November 25, 2025",
    time: "6:30 PM - 9:30 PM",
    location: "Singapore",
    venue: "Marina Bay Sands",
    spotsAvailable: 55,
    price: 499
  }
];

const EventCard = ({ event, openBooking }: { event: EventProps, openBooking: () => void }) => {
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${event.isFeatured ? 'border-purple-300 dark:border-purple-700 shadow-md' : ''}`}>
      {event.isFeatured && (
        <div className="absolute -top-3 -right-3">
          <Badge className="bg-gradient-to-r from-purple-500 to-blue-500">
            Featured
          </Badge>
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl">{event.title}</CardTitle>
        <CardDescription>{event.date} • {event.time}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-medium">Location:</span> {event.location}
          </div>
          <div>
            <span className="font-medium">Venue:</span> {event.venue}
          </div>
          <div>
            <span className="font-medium">Available:</span> {event.spotsAvailable} spots
          </div>
          <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 mt-2">
            ${event.price}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={openBooking}
          className={`w-full ${event.isFeatured ? 'bg-gradient-to-r from-purple-600 to-blue-500' : ''}`}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

const EventsSection = ({ openBooking }: EventsSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section id="events" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join Jay Shetty at one of his exclusive meet & greet events happening around the world.
            Limited spots available for these transformative experiences.
          </p>
        </div>
        
        {isMobile ? (
          <div className="mb-10">
            <Carousel className="w-full">
              <CarouselContent>
                {events.map((event, index) => (
                  <CarouselItem key={index} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <EventCard event={event} openBooking={openBooking} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-2">
                <CarouselPrevious className="relative inset-auto translate-y-0" />
                <CarouselNext className="relative inset-auto translate-y-0" />
              </div>
            </Carousel>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {events.map((event, index) => (
              <EventCard key={index} event={event} openBooking={openBooking} />
            ))}
          </div>
        )}
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
