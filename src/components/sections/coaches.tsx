import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const coaches = [
  {
    name: "Richard Mabotja",
    role: "Head of the Porgramme",
    avatar: "/logo.png",
    hint: "professional portrait",
    bio: "...............",
  },
  {
   name: "Nkosinathi Msiza",
    role: " Prestige u13A Head Coach & Batting Guru",
    avatar: "/coachnathi.png",
    hint: "professional portrait",
    bio: "...................",
  },
  {
    name: "Coach Tebatso ",
    role: "Fielding & Fitness Coach",
    avatar: "/logo.png",
    hint: "professional portrait",
    bio: ".......................",
  },
  {
    name: "Coach ?",
    role: "Spin Bowling Virtuoso",
    avatar: "/logo.png",
    hint: "professional portrait",
    bio: " ................. ",
  },
  {
    name: "Coach ?",
    role: "Spin Bowling Virtuoso",
    avatar: "/logo.png",
    hint: "professional portrait",
    bio: "................. ",
  },
  {
    name: "Coach ?",
    role: "Spin Bowling Virtuoso",
    avatar: "/logo.png",
    hint: "professional portrait",
    bio: "................. ",
  },
  {
    name: "Coach ?",
    role: "Spin Bowling Virtuoso",
    avatar: "/logo.png",
    hint: "professional portrait",
    bio: "................. ",
  },
  {
    name: "Coach ?",
    role: "Spin Bowling Virtuoso",
    avatar: "/logo.png",
    hint: "professional portrait",
    bio: "................. ",
  },
];

export default function CoachesSection() {
  return (
    <section id="coaches" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-5xl md:text-5xl font-bold">Meet Our Coaches</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Learn from the qualifed CSA National Level Candidates. Our experienced coaches are dedicated to your success.
          </p>
          <br></br>
          <hr></hr>
        Click to view more about our coaches
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <Card key={index} className="text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary">
              <CardHeader className="items-center bg-secondary p-6">
                <Avatar className="h-24 w-24 border-4 border-white">
                  <AvatarImage src={coach.avatar} alt={coach.name} data-ai-hint={coach.hint} />
                  <AvatarFallback>{coach.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl">{coach.name}</CardTitle>
                <CardDescription className="text-primary font-semibold mt-1">{coach.role}</CardDescription>
                <p className="text-muted-foreground mt-4 text-sm">{coach.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
