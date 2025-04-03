import React from "react";
import { Select, SelectItem, Button, DateRangePicker } from "@heroui/react";
import { parseDate } from "@internationalized/date";

const cities = [
  {
    label: "New York",
    value: "NYC",
  },
  {
    label: "Los Angeles",
    value: "LA",
  },
  {
    label: "Chicago",
    value: "CHI",
  },
  {
    label: "Miami",
    value: "MIA",
  },
];

export const BookingForm = () => {
  const [selectedCity, setSelectedCity] = React.useState<string>("");

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto -mt-16 bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          label="Select a City"
          placeholder="Choose a city"
          value={selectedCity}
          onChange={handleCityChange}>
          {cities.map((city) => (
            <SelectItem key={city.value} textValue={city.label}>
              {city.label}
            </SelectItem>
          ))}
        </Select>

        <div>
          <DateRangePicker
            label="Check-in - Check-out"
            aria-label="Select check-in and check-out dates"
            defaultValue={{
              start: parseDate("2025-04-01"),
              end: parseDate("2025-04-30"),
            }}
          />
        </div>
      </div>
      <Button
        color="primary"
        className="md:col-span-3 hover:bg-gold-dark"
        size="lg">
        Check Availability
      </Button>
    </div>
  );
};
