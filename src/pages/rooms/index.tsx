import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Button,
  Image,
  Select,
  SelectItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { rooms, amenityIcons } from "./room-data";

type AmenityKey = keyof typeof amenityIcons;

const RoomCard = ({ room }: { room: (typeof rooms)[0] }) => {
  const navigate = useNavigate();

  return (
    <Card className="mb-8">
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            removeWrapper
            alt={room.title}
            className="w-full h-[300px] object-cover rounded-lg"
            src={room.image}
          />
          <div className="flex flex-col">
            <div>
              <h2 className="text-2xl font-bold mb-2">{room.title}</h2>
              <p className="text-default-500 mb-4">{room.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-default-500">Room Size</p>
                  <p className="font-semibold">{room.size}</p>
                </div>
                <div>
                  <p className="text-sm text-default-500">Occupancy</p>
                  <p className="font-semibold">{room.occupancy}</p>
                </div>
                <div>
                  <p className="text-sm text-default-500">Bed Type</p>
                  <p className="font-semibold">{room.beds}</p>
                </div>
                <div>
                  <p className="text-sm text-default-500">Price per night</p>
                  <span className="text-gold font-semibold">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(room.price)}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-1">
                    <Icon
                      icon={amenityIcons[amenity as AmenityKey].icon}
                      className="w-4 h-4 text-default-500"
                    />
                    <span className="text-sm text-default-500">
                      {amenityIcons[amenity as AmenityKey].label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              <Button
                color="primary"
                size="lg"
                className="flex-1"
                onPress={() => navigate(`/rooms/${room.id}`)}>
                View Details
              </Button>
              <Button
                variant="flat"
                size="lg"
                onPress={() => navigate("/contact", { replace: true })}>
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const Rooms = () => {
  const [sortBy, setSortBy] = React.useState("recommended");

  const sortedRooms = React.useMemo(() => {
    let sorted = [...rooms];
    switch (sortBy) {
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "size-asc":
        return sorted.sort((a, b) => parseInt(a.size) - parseInt(b.size));
      case "size-desc":
        return sorted.sort((a, b) => parseInt(b.size) - parseInt(a.size));
      default:
        return sorted;
    }
  }, [sortBy]);

  return (
    <main className="pt-[100px] pb-16">
      <div className="container mx-auto px-section">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Our Rooms</h1>
          <Select
            label="Sort by"
            className="w-[200px]"
            selectedKeys={[sortBy]}
            onSelectionChange={(keys) =>
              setSortBy(Array.from(keys)[0] as string)
            }>
            <SelectItem key="recommended">Recommended</SelectItem>
            <SelectItem key="price-asc">Price: Low to High</SelectItem>
            <SelectItem key="price-desc">Price: High to Low</SelectItem>
            <SelectItem key="size-asc">Size: Small to Large</SelectItem>
            <SelectItem key="size-desc">Size: Large to Small</SelectItem>
          </Select>
        </div>

        <div>
          {sortedRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Rooms;
