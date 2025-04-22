import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Button,
  Image,
  Tabs,
  Tab,
  Divider,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { rooms, amenityIcons } from "./room-data";

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const room = rooms.find((r) => r.id === (id ? parseInt(id) : -1));

  if (!room) {
    return (
      <main className="pt-[100px] pb-16">
        <div className="container mx-auto px-section text-center">
          <h1 className="text-3xl font-bold mb-4">Room Not Found</h1>
          <Button color="primary" onPress={() => navigate("/rooms")}>
            Back to Rooms
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-[100px] pb-16">
      <div className="container mx-auto px-section">
        <Button
          variant="light"
          className="mb-6"
          startContent={<Icon icon="lucide:arrow-left" />}
          onPress={() => navigate("/rooms")}>
          Back to Rooms
        </Button>

        <Card>
          <CardBody>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Image
                  removeWrapper
                  alt={room.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                  src={room.image}
                />
                <div className="grid grid-cols-3 gap-4">
                  {room.additionalImages.map((img, index) => (
                    <Image
                      key={index}
                      removeWrapper
                      alt={`${room.title} view ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                      src={img}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold mb-2">{room.title}</h1>
                <p className="text-2xl font-semibold text-gold mb-4">
                  <span>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(room.price)}
                  </span>{" "}
                  <span className="text-sm text-default-500">per night</span>
                </p>

                <p className="text-default-500 mb-6">{room.description}</p>

                <Tabs aria-label="Room details" className="mb-6">
                  <Tab key="details" title="Details">
                    <div className="grid grid-cols-2 gap-4 mt-4">
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
                    </div>
                  </Tab>
                  <Tab key="amenities" title="Amenities">
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Icon
                            icon="lucide:check"
                            className="w-4 h-4 text-gold"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Tab>
                  <Tab key="policies" title="Policies">
                    <div className="space-y-4 mt-4">
                      {Object.entries(room.policies).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-sm text-default-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                          <p>{value}</p>
                        </div>
                      ))}
                    </div>
                  </Tab>
                </Tabs>

                <Divider className="my-6" />

                <div className="flex flex-wrap gap-4 mb-6">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <Icon
                        icon={
                          amenityIcons[amenity as keyof typeof amenityIcons]
                            .icon
                        }
                        className="w-5 h-5 text-default-500"
                      />
                      <span className="text-default-500">
                        {
                          amenityIcons[amenity as keyof typeof amenityIcons]
                            .label
                        }
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button color="primary" size="lg" className="flex-1">
                    Book Now
                  </Button>
                  <Button
                    variant="flat"
                    size="lg"
                    onPress={() => navigate("/contact")}>
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default RoomDetail;
