import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, Users, Zap, CheckCircle2 } from "lucide-react";

const courses = [
  {
    title: "Beginner's Program",
    description: "Master the fundamentals of cricket with our comprehensive beginner's course.",
    icon: <BookOpen className="h-10 w-10 text-accent" />,
    features: [
      "Basic batting and bowling techniques",
      "Fielding drills and positions",
      "Understanding the rules of the game",
    ],
  },
  {
    title: "Advanced Batting Clinic",
    description: "Refine your batting skills and learn to dominate the crease.",
    icon: <Zap className="h-10 w-10 text-accent" />,
    features: [
      "Advanced shot selection",
      "Playing spin and pace bowling",
      "Mental strategies for long innings",
    ],
  },
  {
    title: "Elite Pace Bowling",
    description: "Develop speed, accuracy, and lethal variations in your bowling.",
    icon: <Target className="h-10 w-10 text-accent" />,
    features: [
      "Biomechanics and run-up optimization",
      "Swing and seam bowling masterclass",
      "Injury prevention and conditioning",
    ],
  },
  {
    title: "High-Performance Camp",
    description: "An intensive camp for serious cricketers aiming for the professional level.",
    icon: <Users className="h-10 w-10 text-accent" />,
    features: [
      "One-on-one coaching sessions",
      "Match simulation and analysis",
      "Nutrition and fitness guidance",
    ],
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Courses</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Structured programs designed to elevate every aspect of your game.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="items-center text-center">
                {course.icon}
                <CardTitle className="font-headline text-2xl pt-4">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-muted-foreground text-left">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
