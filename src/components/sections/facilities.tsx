import Image from "next/image";

const facilities = [
  {
    name: "Indoor Nets",
    image: "/logo.png",
    hint: "cricket nets",
  },
  {
    name: "Outdoor Pitches",
    image: "/logo.png",
    hint: "cricket pitch",
  },
  {
    name: "High-Tech Gym",
    image: "/logo.png",
    hint: "gym fitness",
  },
  {
    name: "Recovery Zone",
    image: "/logo.png",
    hint: "spa recovery",
  },
  {
    name: "Analysis Suite",
    image: "/logo.png",
    hint: "video analysis",
  },
  {
    name: "Player's Lounge",
    image: "/logo.png",
    hint: "modern lounge",
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-5xl md:text-5xl font-bold">Our Best Facilities</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Train in an environment built for champions, with state-of-the-art equipment and infrastructure.
            <br></br>
        <hr></hr>
            Click to view More .. ..
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={facility.image}
                alt={facility.name}
                width={600}
                height={400}
                data-ai-hint={facility.hint}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-11"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white font-headline text-2xl font-bold">{facility.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
