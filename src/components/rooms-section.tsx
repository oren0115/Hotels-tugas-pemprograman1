import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
// import { title } from "process";

type AmenityType =
  | "wifi"
  | "tv"
  | "shower"
  | "coffee"
  | "minibar"
  | "workspace"
  | "bathtub";

interface Room {
  id: number;
  title: string;
  description: string;
  price: number;
  size: string;
  occupancy: string;
  beds: string;
  image: string;
  amenities: AmenityType[];
}

const rooms: Room[] = [
  {
    id: 1,
    title: "Standard Twin Room",
    description: "Perfect for sharing, featuring two comfortable single beds",
    price: 199,
    size: "28m²",
    occupancy: "2 Adults",
    beds: "2 Single Beds",
    image: "/img/rooms/standard-twin.jpg",
    amenities: ["wifi", "tv", "shower", "coffee"],
  },
  {
    id: 2,
    title: "Standard Room",
    description: "Cozy room with a queen-size bed and modern amenities",
    price: 249,
    size: "32m²",
    occupancy: "2 Adults",
    beds: "1 Queen Bed",
    image: "/img/rooms/standard.jpg",
    amenities: ["wifi", "tv", "shower", "coffee", "minibar"],
  },
  {
    id: 3,
    title: "Standard View Room",
    description: "Stunning city views with deluxe furnishings",
    price: 299,
    size: "35m²",
    occupancy: "2 Adults, 1 Child",
    beds: "1 King Bed",
    image: "/img/rooms/standard-view-rooms.jpg",
    amenities: ["wifi", "tv", "shower", "coffee", "minibar", "workspace"],
  },
  {
    id: 4,
    title: "Deluxe Room",
    description: "Spacious luxury with premium amenities and services",
    price: 399,
    size: "45m²",
    occupancy: "2 Adults, 2 Children",
    beds: "1 King Bed, 1 Sofa Bed",
    image: "/img/rooms/deluxe-rooms.jpg",
    amenities: [
      "wifi",
      "tv",
      "shower",
      "coffee",
      "minibar",
      "workspace",
      "bathtub",
    ],
  },
];

const amenityIcons: Record<AmenityType, { icon: string; label: string }> = {
  wifi: { icon: "lucide:wifi", label: "Free WiFi" },
  tv: { icon: "lucide:tv", label: "Smart TV" },
  shower: { icon: "lucide:shower-head", label: "Rain Shower" },
  coffee: { icon: "lucide:coffee", label: "Coffee Maker" },
  minibar: { icon: "lucide:wine", label: "Mini Bar" },
  workspace: { icon: "lucide:laptop", label: "Work Space" },
  bathtub: { icon: "lucide:bath", label: "Bathtub" },
};

export const RoomsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Rooms & Rates</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our carefully curated selection of rooms, each designed to
          provide the perfect blend of comfort and luxury for your stay.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="w-full hover:shadow-lg transition-shadow duration-300">
              <CardBody className="p-0">
                <Image
                  className="w-full h-48 object-cover"
                  removeWrapper
                  alt={room.title}
                  src={room.image}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{room.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {room.description}
                  </p>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:users" className="w-4 h-4" />
                      <span className="text-sm">{room.occupancy}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:maximize" className="w-4 h-4" />
                      <span className="text-sm">{room.size}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.slice(0, 3).map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center gap-1 text-sm text-gray-600">
                        <Icon
                          icon={amenityIcons[amenity].icon}
                          className="w-4 h-4"
                        />
                      </div>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="text-sm text-gray-500">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold">${room.price}</span>
                      <span className="text-gray-500 text-sm">/night</span>
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    color="primary"
                    variant="flat"
                    onClick={() => navigate(`/rooms/${room.id}`)}>
                    Check Details
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
