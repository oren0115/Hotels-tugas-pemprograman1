import React from "react";
import { Card, CardBody, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

const facilities = [
  {
    id: 1,
    title: "Luxury Swimming Pool",
    description:
      "Temperature-controlled infinity pool with panoramic city views. Open daily from 6 AM to 10 PM.",
    icon: "lucide:pool",
    image: "https://picsum.photos/seed/pool/800/400",
    features: [
      "Temperature controlled",
      "Towel service",
      "Pool bar",
      "Loungers",
    ],
  },
  {
    id: 2,
    title: "Modern Fitness Center",
    description:
      "State-of-the-art equipment and personal training services available 24/7.",
    icon: "lucide:dumbbell",
    image: "https://picsum.photos/seed/gym/800/400",
    features: [
      "24/7 access",
      "Personal trainers",
      "Modern equipment",
      "Yoga studio",
    ],
  },
  {
    id: 3,
    title: "Gourmet Restaurant",
    description:
      "Fine dining experience with international cuisine and local specialties.",
    icon: "lucide:utensils",
    image: "https://picsum.photos/seed/restaurant/800/400",
    features: [
      "Breakfast buffet",
      "À la carte dining",
      "Wine cellar",
      "Private dining",
    ],
  },
  {
    id: 4,
    title: "Business Center",
    description: "Fully equipped meeting rooms and conference facilities.",
    icon: "lucide:briefcase",
    image: "https://picsum.photos/seed/business/800/400",
    features: [
      "Meeting rooms",
      "Video conferencing",
      "High-speed WiFi",
      "Printing services",
    ],
  },
  {
    id: 5,
    title: "Spa & Wellness",
    description:
      "Relaxation and rejuvenation with professional spa treatments.",
    icon: "lucide:flower",
    image: "https://picsum.photos/seed/spa/800/400",
    features: ["Massage therapy", "Sauna", "Steam room", "Beauty salon"],
  },
];

const FacilityCard = ({ facility }: { facility: (typeof facilities)[0] }) => {
  return (
    <Card className="mb-8">
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            removeWrapper
            alt={facility.title}
            className="w-full h-[300px] object-cover rounded-lg"
            src={facility.image}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-full bg-gold/10">
                <Icon icon={facility.icon} className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-2xl font-bold">{facility.title}</h2>
            </div>

            <p className="text-default-500 mb-6">{facility.description}</p>

            <div className="grid grid-cols-2 gap-4">
              {facility.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="w-4 h-4 text-gold" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const Facilities = () => {
  return (
    <main className="pt-[100px] pb-16">
      <div className="container mx-auto px-section">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Our Facilities</h1>
          <p className="text-default-500 max-w-2xl mx-auto">
            Experience luxury and comfort with our world-class facilities
            designed to make your stay exceptional.
          </p>
        </div>

        <div>
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Facilities;
