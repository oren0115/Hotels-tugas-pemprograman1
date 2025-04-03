import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardBody, Button, Spinner } from "@heroui/react";

const rateCategories = [
  {
    id: "standard",
    name: "Standard Rate",
    price: "$199",
    description: "Basic room with essential amenities",
    features: ["Free WiFi", "TV", "Air Conditioning", "Private Bathroom"],
  },
  {
    id: "deluxe",
    name: "Deluxe Rate",
    price: "$299",
    description: "Enhanced comfort with premium amenities",
    features: [
      "Free WiFi",
      "Smart TV",
      "Air Conditioning",
      "Private Bathroom",
      "Mini Bar",
      "Room Service",
    ],
  },
  {
    id: "suite",
    name: "Suite Rate",
    price: "$499",
    description: "Luxury experience with all premium features",
    features: [
      "Free WiFi",
      "Smart TV",
      "Air Conditioning",
      "Private Bathroom",
      "Mini Bar",
      "Room Service",
      "Jacuzzi",
      "Ocean View",
    ],
  },
];

export const RateOptions = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Spinner size="lg" color="primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Available Rates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rateCategories.map((rate) => (
            <Card key={rate.id} className="hover:shadow-lg transition-shadow">
              <CardBody>
                <h3 className="text-xl font-semibold mb-2">{rate.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">
                  {rate.price}
                </p>
                <p className="text-gray-600 mb-4">{rate.description}</p>
                <ul className="space-y-2 mb-6">
                  {rate.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  color="primary"
                  className="w-full"
                  onClick={() => navigate(`/rooms/${id}/book?rate=${rate.id}`)}>
                  Select Rate
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RateOptions;
