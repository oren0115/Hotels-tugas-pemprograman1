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
} from "@heroui/react";
import { parseDate, CalendarDate } from "@internationalized/date";

const locations = [
  { id: "nyc", name: "New York", country: "USA" },
  { id: "lon", name: "London", country: "UK" },
  { id: "par", name: "Paris", country: "France" },
  { id: "tok", name: "Tokyo", country: "Japan" },
  { id: "dub", name: "Dubai", country: "UAE" },
];

const mockResults = [
  {
    id: 1,
    name: "Luxury City Hotel",
    location: "New York",
    price: "$299",
    rating: 4.8,
    image: "https://picsum.photos/seed/hotel1/400/250",
    amenities: ["Pool", "Spa", "Restaurant", "Gym"],
  },
  {
    id: 2,
    name: "Harbor View Resort",
    location: "New York",
    price: "$399",
    rating: 4.9,
    image: "https://picsum.photos/seed/hotel2/400/250",
    amenities: ["Beach Access", "Pool", "Restaurant", "Bar"],
  },
  {
    id: 3,
    name: "Downtown Boutique Hotel",
    location: "New York",
    price: "$199",
    rating: 4.5,
    image: "https://picsum.photos/seed/hotel3/400/250",
    amenities: ["Restaurant", "Bar", "Business Center"],
  },
];

export const Explore = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearching, setIsSearching] = React.useState(false);
  const [results, setResults] = React.useState<typeof mockResults | null>(null);

  const selectedLocation = searchParams.get("location") || "";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const handleSearch = () => {
    if (!selectedLocation || !startDate || !endDate) return;

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setResults(mockResults);
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
    range: { start: CalendarDate; end: CalendarDate } | null
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
      <div className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            Find Your Perfect Stay
          </h1>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Where would you like to stay?"
                placeholder="Select a location"
                value={selectedLocation}
                onChange={handleLocationChange}>
                {locations.map((location) => (
                  <SelectItem key={location.id} textValue={location.name}>
                    <div className="flex flex-col">
                      <span>{location.name}</span>
                      <span className="text-sm text-gray-500">
                        {location.country}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </Select>

              <DateRangePicker
                label="When would you like to stay?"
                aria-label="Select check-in and check-out dates"
                defaultValue={{
                  start: parseDate("2024-04-01"),
                  end: parseDate("2024-04-07"),
                }}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((hotel) => (
              <Card
                key={hotel.id}
                className="hover:shadow-lg transition-shadow">
                <CardBody className="p-0">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{hotel.name}</h3>
                      <span className="text-lg font-bold text-primary">
                        {hotel.price}
                        <span className="text-sm text-gray-500">/night</span>
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{hotel.location}</p>
                    <div className="flex items-center mb-4">
                      <span className="text-primary mr-1">★</span>
                      <span className="font-medium">{hotel.rating}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <Button
                      color="primary"
                      className="w-full"
                      onClick={() => navigate(`/hotels/${hotel.id}`)}>
                      View Details
                    </Button>
                  </div>
                </CardBody>
              </Card>
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
