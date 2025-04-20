import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Button,
  Select,
  SelectItem,
  DateRangePicker,
  Spinner,
  Image,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { rooms, amenityIcons } from "@/pages/rooms/room-data";

// Define the AmenityKey type based on the amenityIcons object
type AmenityKey = keyof typeof amenityIcons;

const locations = [
  { id: "std", name: "Standard Room", cities: "Tangerang" },
  { id: "stdtwin", name: "Standard Twin Room", cities: "Tangerang" },
  { id: "stdview", name: "Standard View Room", cities: "Tangerang" },
];

// RoomCard component to display a single room
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
                  <p className="font-semibold text-gold">${room.price}</p>
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
                Inquire
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

// Main Explore component
export const Explore = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearching, setIsSearching] = React.useState(false);
  const [results, setResults] = React.useState<typeof rooms | null>(null);

  const selectedLocation = searchParams.get("location") || "";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const handleSearch = () => {
    if (!selectedLocation || !startDate || !endDate) return;

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      // Filter rooms based on selected room type
      const filteredResults = rooms.filter(room => {
        switch (selectedLocation) {
          case "std":
            return room.title === "Standard Room";
          case "stdtwin":
            return room.title === "Standard Twin Room";
          case "stdview":
            return room.title === "Standard View Room";
          default:
            return true;
        }
      });
      setResults(filteredResults);
      setIsSearching(false);
    }, 1500);
  };

  React.useEffect(() => {
    if (selectedLocation && startDate && endDate) {
      handleSearch();
    }
  }, [selectedLocation, startDate, endDate]);

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchParams({
      location: event.target.value,
      ...(startDate && { startDate }),
      ...(endDate && { endDate }),
    });
  };

  const handleDateChange = (
    range: { start: any; end: any } | null
  ) => {
    if (!range) return;

    setSearchParams({
      ...(selectedLocation && { location: selectedLocation }),
      startDate: range.start.toString(),
      endDate: range.end.toString(),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <div className="bg-primary-500 text-white py-16 m-5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            Find Your Perfect Rooms
          </h1>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Which room do you choose?"
                placeholder="Select a Room"
                value={selectedLocation}
                onChange={handleLocationChange}>
                {locations.map((location) => (
                  <SelectItem key={location.id} textValue={location.name}>
                    <div className="flex flex-col">
                      <span>{location.name}</span>
                      <span className="text-sm text-gray-500">
                        {location.cities}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </Select>

              <DateRangePicker
                label="When would you like to stay?"
                aria-label="Select check-in and check-out dates"
                onChange={handleDateChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-12">
        {isSearching ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Spinner size="lg" color="primary" />
          </div>
        ) : results ? (
          <div className="space-y-8">
            {results.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            Please select a location and dates to start your search
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
