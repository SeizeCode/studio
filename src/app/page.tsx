import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSlider from "@/components/sections/hero-slider";
import CoursesSection from "@/components/sections/courses";
import CoachesSection from "@/components/sections/coaches";
import FacilitiesSection from "@/components/sections/facilities";
import ContactSection from "@/components/sections/contact";
import EventsSection from "@/components/sections/events";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="w-full">
          <div className="container mx-auto max-w-7xl px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <HeroSlider />
              </div>
              <div className="lg:col-span-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="font-headline text-center text-3xl font-bold">
                      About Prestige Cricket Academy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="mission" className="w-full">
                      <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-12">
                        <TabsTrigger
                          value="mission"
                          className="gap-2 text-base py-2.5"
                        >
                          <Briefcase /> Our Mission
                        </TabsTrigger>
                        <TabsTrigger
                          value="history"
                          className="gap-2 text-base py-2.5"
                        >
                          <Trophy /> Our History
                        </TabsTrigger>
                        <TabsTrigger
                          value="alumni"
                          className="gap-2 text-base py-2.5"
                        >
                          <GraduationCap /> Notable Alumni
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="mission" className="pt-6">
                        <div className="space-y-4 text-muted-foreground text-center max-w-3xl mx-auto">
                          <p>
                            Welcome to Prestige Cricket Academy, where passion
                            for cricket meets professional coaching. We are
                            dedicated to nurturing young talent and developing
                            the next generation of cricket champions.
                          </p>
                          <p>
                            Our state-of-the-art facilities and experienced
                            coaches provide an unparalleled environment for
                            players to grow, learn, and excel. Founded on the
                            principles of discipline, dedication, and
                            sportsmanship, our academy offers a holistic
                            approach to cricket training, focusing not just on
                            skills but also on character development.
                          </p>
                        </div>
                      </TabsContent>
                      <TabsContent value="history" className="pt-6">
                        <div className="space-y-4 text-muted-foreground text-center max-w-3xl mx-auto">
                          <p>
                            Founded in 2010, Prestige Cricket Academy started
                            as a small local club with a big dream. Over the
                            past decade, we have grown into a premier
                            institution recognized for producing top-tier
                            athletes.
                          </p>
                          <p>
                            Our journey has been marked by numerous regional
                            championships and a commitment to fostering a love
                            for the game in every student.
                          </p>
                        </div>
                      </TabsContent>
                      <TabsContent value="alumni" className="pt-6">
                        <div className="space-y-4 text-muted-foreground text-center max-w-3xl mx-auto">
                          <p>
                            We are proud of our alumni who have gone on to
                            represent their states and country. Our graduates
                            have played in the national league, with several
                            making their international debut.
                          </p>
                          <p>
                            Their success is a testament to the dedication of
                            our coaching staff and the rigorous training
                            programs we offer. We continue to follow their
                            careers and celebrate their achievements.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
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
