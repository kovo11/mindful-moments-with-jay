
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import FaqSection from "@/components/FaqSection";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";
import VideoSection from "@/components/VideoSection";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const openBooking = () => {
    setIsBookingOpen(true);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar isScrolled={isScrolled} openBooking={openBooking} />
      <main>
        <Hero openBooking={openBooking} />
        <EventsSection openBooking={openBooking} />
        <AboutSection />
        <VideoSection />
        <GallerySection />
        <FaqSection />
        <RegisterSection />
      </main>
      <Footer />
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default Index;
