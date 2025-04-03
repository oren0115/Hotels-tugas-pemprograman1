import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Button, Image } from "@heroui/react";
// import { title } from "process";

const rooms = [
  {
    id: 1,
    title: "Standard Twin Room",
    image: "https://picsum.photos/seed/room1/300/200",
  },
  {
    id: 2,
    title: "Standard Room",
    image: "https://picsum.photos/seed/room2/300/200",
  },
  {
    id: 3,
    title: "Standart View Room",
    image: "https://picsum.photos/seed/room3/300/200",
  },
  {
    id: 4,
    title: "Deluxe Room",
    image: "https://picsum.photos/seed/room4/300/200",
  },
];

export const RoomsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <div className="container mx-auto px-section">
        <h2 className="text-3xl font-bold text-center mb-12">Rooms & Rates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="w-full hover:shadow-lg transition-shadow">
              <CardBody className="p-0">
                <Image
                  className="w-full h-48 object-cover"
                  removeWrapper
                  alt={room.title}
                  src={room.image}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-4">{room.title}</h3>
                  <Button
                    className="w-full"
                    color="primary"
                    variant="flat"
                    onClick={() => navigate(`/rooms/${room.id}/rates`)}>
                    Check Rates
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
