import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSlider from "@/components/sections/hero-slider";
import CoursesSection from "@/components/sections/courses";
import CoachesSection from "@/components/sections/coaches";
import FacilitiesSection from "@/components/sections/facilities";
import ContactSection from "@/components/sections/contact";
import EventsSection from "@/components/sections/events";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSlider />
        <EventsSection />
        <CoursesSection />
        <CoachesSection />
        <FacilitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
