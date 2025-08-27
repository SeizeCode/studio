import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSlider from "@/components/sections/hero-slider";
import CoursesSection from "@/components/sections/courses";
import CoachesSection from "@/components/sections/coaches";
import FacilitiesSection from "@/components/sections/facilities";
import ContactSection from "@/components/sections/contact";
import EventsSection from "@/components/sections/events";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="w-full">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col lg:flex-row gap-8 py-8">
              <div className="w-full lg:w-1/2">
                <HeroSlider />
              </div>
              <div className="w-full lg:w-1/2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl">
                      Interesting Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>You can add your interesting information here.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
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