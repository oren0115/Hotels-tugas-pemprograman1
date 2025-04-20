import { Card, CardBody, Button } from "@heroui/react";
import { pressReleases } from "@/pages/press/press.article";

const Press = () => {
  return (
    <div className="container mx-auto py-16 m-5">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Press Room</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Latest news, press releases, and media resources
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Latest Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <Card key={index}>
                <CardBody>
                  <h3 className="text-xl font-medium mb-2">{release.title}</h3>
                  <p className="text-gray-500 mb-2">{release.date}</p>
                  <p className="text-gray-600 mb-4">{release.summary}</p>
                  <Button color="primary" variant="solid">
                    Read More
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardBody>
              <h2 className="text-2xl font-semibold mb-4">Media Resources</h2>
              <div className="space-y-4">
                <Button color="primary" variant="solid" className="w-full">
                  Download Press Kit
                </Button>
                <Button color="primary" variant="light" className="w-full">
                  Brand Guidelines
                </Button>
                <Button color="primary" variant="light" className="w-full">
                  Photo Gallery
                </Button>
              </div>
            </CardBody>
          </Card>

          <Card className="mt-6">
            <CardBody>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-600 mb-4">
                For media inquiries, please contact our PR team:
              </p>
              <p className="text-gray-600">Email: press@hotel.com</p>
              <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Press;
