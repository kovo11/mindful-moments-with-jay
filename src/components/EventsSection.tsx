
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { MapPin, CalendarDays, ChevronDown, ChevronUp, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  spotsAvailable: number;
  price: number;
  state: string;
  isFeatured?: boolean;
}

interface EventsSectionProps {
  openBooking: () => void;
}

const allEvents: EventProps[] = [
  {
    title: "New York Mindfulness Workshop",
    date: "June 15, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "New York, NY",
    state: "NY",
    venue: "Lincoln Center",
    spotsAvailable: 75,
    price: 499,
    isFeatured: true
  },
  {
    title: "Los Angeles Meditation Retreat",
    date: "July 8, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Los Angeles, CA",
    state: "CA",
    venue: "The Ritz-Carlton",
    spotsAvailable: 50,
    price: 599
  },
  {
    title: "Chicago Purpose Discovery",
    date: "August 21, 2025",
    time: "6:30 PM - 9:30 PM",
    location: "Chicago, IL",
    state: "IL",
    venue: "The Four Seasons",
    spotsAvailable: 60,
    price: 449
  },
  {
    title: "Miami Wisdom Session",
    date: "September 3, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Miami, FL",
    state: "FL",
    venue: "Faena Forum",
    spotsAvailable: 45,
    price: 399
  },
  {
    title: "San Francisco Inner Growth Journey",
    date: "October 17, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "San Francisco, CA",
    state: "CA",
    venue: "Palace of Fine Arts",
    spotsAvailable: 80,
    price: 549
  },
  {
    title: "Seattle Mind Mastery",
    date: "November 25, 2025",
    time: "6:30 PM - 9:30 PM",
    location: "Seattle, WA",
    state: "WA",
    venue: "Benaroya Hall",
    spotsAvailable: 55,
    price: 499
  },
  {
    title: "Austin Mindfulness Experience",
    date: "January 14, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Austin, TX",
    state: "TX",
    venue: "The Driskill",
    spotsAvailable: 65,
    price: 479
  },
  {
    title: "Boston Consciousness Seminar",
    date: "February 22, 2026",
    time: "7:00 PM - 10:00 PM",
    location: "Boston, MA",
    state: "MA",
    venue: "Boston Park Plaza",
    spotsAvailable: 70,
    price: 489
  },
  {
    title: "Denver Elevation Workshop",
    date: "March 11, 2026",
    time: "6:30 PM - 9:30 PM",
    location: "Denver, CO",
    state: "CO",
    venue: "The Brown Palace Hotel",
    spotsAvailable: 55,
    price: 469
  },
  {
    title: "Atlanta Purpose Forum",
    date: "April 5, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Atlanta, GA",
    state: "GA",
    venue: "The St. Regis Atlanta",
    spotsAvailable: 60,
    price: 459
  },
  {
    title: "Philadelphia Inner Peace Workshop",
    date: "May 18, 2026",
    time: "7:00 PM - 10:00 PM",
    location: "Philadelphia, PA",
    state: "PA",
    venue: "The Rittenhouse Hotel",
    spotsAvailable: 50,
    price: 439
  },
  {
    title: "Portland Harmony Retreat",
    date: "June 23, 2026",
    time: "6:30 PM - 9:30 PM",
    location: "Portland, OR",
    state: "OR",
    venue: "The Nines",
    spotsAvailable: 45,
    price: 429
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
        <CardDescription className="flex items-center gap-1">
          <CalendarDays className="h-4 w-4" /> {event.date} • {event.time}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-1">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <div>
              <div>{event.location}</div>
              <div className="text-muted-foreground">{event.venue}</div>
            </div>
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
  const [viewAll, setViewAll] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState<EventProps[]>([]);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // All unique states for the dropdown
  const states = Array.from(new Set(allEvents.map(event => event.state))).sort();

  // Filter events based on state selection and search
  useEffect(() => {
    let filtered = allEvents;
    
    if (selectedState) {
      filtered = filtered.filter(event => event.state === selectedState);
    }
    
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(query) || 
        event.location.toLowerCase().includes(query) ||
        event.venue.toLowerCase().includes(query)
      );
    }
    
    // Limit events if not viewing all
    if (!viewAll) {
      filtered = filtered.slice(0, 6);
    }
    
    setFilteredEvents(filtered);
  }, [selectedState, searchQuery, viewAll]);

  // Toggle view all events
  const toggleViewAll = () => {
    setViewAll(!viewAll);
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedState(null);
    setSearchQuery("");
  };
  
  return (
    <section id="events" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join Jay Shetty at one of his exclusive meet & greet events happening across the United States.
            Limited spots available for these transformative experiences.
          </p>
        </div>
        
        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
          <div className="relative w-full md:w-auto md:min-w-[300px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                {selectedState ? `State: ${selectedState}` : "Filter by State"}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={resetFilters}>
                All States
              </DropdownMenuItem>
              {states.map((state) => (
                <DropdownMenuItem 
                  key={state} 
                  onClick={() => setSelectedState(state)}
                >
                  {state}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {(selectedState || searchQuery) && (
            <Button 
              variant="ghost" 
              onClick={resetFilters} 
              className="text-sm text-purple-600 dark:text-purple-400"
            >
              Clear Filters
            </Button>
          )}
        </div>
        
        {/* Display message when no events match */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg mb-10">
            <p className="text-lg text-gray-600 dark:text-gray-300">No events match your search criteria.</p>
            <Button onClick={resetFilters} className="mt-4">
              View All Events
            </Button>
          </div>
        )}
        
        {/* Events Display */}
        {filteredEvents.length > 0 && (
          <>
            {isMobile ? (
              <div className="mb-10">
                <Carousel className="w-full">
                  <CarouselContent>
                    {filteredEvents.map((event, index) => (
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
                {filteredEvents.map((event, index) => (
                  <EventCard key={index} event={event} openBooking={openBooking} />
                ))}
              </div>
            )}
          </>
        )}
        
        {/* View All / View Less Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={toggleViewAll}
            className="group"
          >
            {viewAll ? (
              <span className="flex items-center gap-1">
                View Less <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              </span>
            ) : (
              <span className="flex items-center gap-1">
                View All Events <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </span>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
