import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Link from "next/link";

const events = [
  {
    title: "Youth Summer Camp",
    date: "June 15-20, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Main Cricket Ground",
    description: "An intensive week-long camp for young cricketers to hone their skills before the next season.",
  },
  {
    title: "Pro Batting Masterclass",
    date: "July 5, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Indoor Net Facility",
    description: "A special session with our head coach focusing on advanced batting techniques and strategies.",
  },
  {
    title: "Fast Bowling Workshop",
    date: "July 22, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Pace Alley Nets",
    description: "Learn the secrets of swing and seam from our pace bowling specialists.",
  },
  {
    title: "Academy Open Day",
    date: "August 1, 2024",
    time: "11:00 AM - 3:00 PM",
    location: "Prestige Cricket Academy Complex",
    description: "Join us for a free open day to tour our facilities, meet the coaches, and see what we offer.",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don't miss out on our exciting camps, workshops, and masterclasses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
                <CardDescription className="pt-2">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CalendarDays className="h-5 w-5 text-accent" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="#contact">Register Now</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
