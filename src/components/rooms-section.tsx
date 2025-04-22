import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

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
    title: "Kamar Standard Twin",
    description:
      "Cocok untuk berbagi, dilengkapi dengan dua tempat tidur single yang nyaman",
    price: 199999,
    size: "28m²",
    occupancy: "2 Dewasa",
    beds: "2 Tempat Tidur Single",
    image: "/img/rooms/standard-twin.jpg",
    amenities: ["wifi", "tv", "shower", "coffee"],
  },
  {
    id: 2,
    title: "Kamar Standard",
    description:
      "Kamar nyaman dengan tempat tidur queen-size dan fasilitas modern",
    price: 249999,
    size: "32m²",
    occupancy: "2 Dewasa",
    beds: "1 Tempat Tidur Queen",
    image: "/img/rooms/standard.jpg",
    amenities: ["wifi", "tv", "shower", "coffee", "minibar"],
  },
  {
    id: 3,
    title: "Kamar dengan Pemandangan Standard",
    description: "Pemandangan kota yang menakjubkan dengan furnitur mewah",
    price: 299999,
    size: "35m²",
    occupancy: "2 Dewasa, 1 Anak",
    beds: "1 Tempat Tidur King",
    image: "/img/rooms/standard-view-rooms.jpg",
    amenities: ["wifi", "tv", "shower", "coffee", "minibar", "workspace"],
  },
  {
    id: 4,
    title: "Kamar Deluxe",
    description: "Kemewahan luas dengan fasilitas dan layanan premium",
    price: 399999,
    size: "45m²",
    occupancy: "2 Dewasa, 2 Anak",
    beds: "1 Tempat Tidur King, 1 Sofa Bed",
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
  wifi: { icon: "lucide:wifi", label: "WiFi Gratis" },
  tv: { icon: "lucide:tv", label: "Smart TV" },
  shower: { icon: "lucide:shower-head", label: "Shower Hujan" },
  coffee: { icon: "lucide:coffee", label: "Pembuat Kopi" },
  minibar: { icon: "lucide:wine", label: "Mini Bar" },
  workspace: { icon: "lucide:laptop", label: "Ruang Kerja" },
  bathtub: { icon: "lucide:bath", label: "Bathtub" },
};

export const RoomsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Kamar & Tarif</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Temukan pilihan kamar kami yang dipilih dengan cermat, masing-masing
          dirancang untuk memberikan perpaduan sempurna antara kenyamanan dan
          kemewahan selama menginap Anda.
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
                        +{room.amenities.length - 3} lainnya
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="font-semibold text-gold text-xl">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(room.price)}
                      </span>
                      <span className="text-gray-500 text-sm">/malam</span>
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    color="primary"
                    variant="flat"
                    onClick={() => navigate(`/rooms/${room.id}`)}>
                    Lihat Detail
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
