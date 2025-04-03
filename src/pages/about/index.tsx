import React from "react";
import { Card, CardBody } from "@heroui/react";

const About = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our story and commitment to excellence in hospitality
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card>
            <CardBody>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600">
                Founded with a vision to redefine luxury hospitality, our hotel
                has been serving guests with exceptional care and attention to
                detail since our establishment. We believe in creating memorable
                experiences that last a lifetime.
              </p>
            </CardBody>
          </Card>
        </div>

        <div>
          <Card>
            <CardBody>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide unparalleled hospitality experiences through
                personalized service, luxurious accommodations, and a commitment
                to excellence in every aspect of our operations.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardBody>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in every service we provide
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    We conduct our business with honesty and transparency
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously improve and innovate our services
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
