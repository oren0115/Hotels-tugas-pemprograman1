import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

export const MapSection = () => {
  return (
    <section className="py-16 bg-default-50">
      <div className="container mx-auto px-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl gont-bold mb-4">Location</h2>
          <p className="text-default-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero
            pariatur, molestiae quis animi maiores, aut mollitia vel incidunt
            deleniti delectus optio! Amet, reprehenderit voluptate!
          </p>
        </div>
        <Card>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-[400px] bg-default-100 rounded-lg relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon
                    className="w-16 h-16 text-default-300"
                    icon="lucide:map"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Getting Here</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      icon="lucide:plane"
                      className="w-5 h-5 text-gold mt-1"
                    />
                    <div>
                      <p className="font-medium">From the Airport</p>
                      <p className="text-default-600">
                        20 minutes by taxi (15 km)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      icon="lucide:train"
                      className="w-5 h-5 text-gold mt-1"
                    />
                    <div>
                      <p className="font-medium">From Train Station</p>
                      <p className="text-default-600">
                        10 minutes by taxi (3 km)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      icon="lucide:bus"
                      className="w-5 h-5 text-gold mt-1"
                    />
                    <div>
                      <p className="font-medium">Public Transport</p>
                      <p className="text-default-600">Bus stops within 100m</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Nearby Attractions
                </h3>
                <ul className="space-y-2 text-default-600">
                  <li>• City Center (5 min walk)</li>
                  <li>• Shopping Mall (10 min walk)</li>
                  <li>• Convention Center (15 min walk)</li>
                  <li>• Historic District (20 min walk)</li>
                </ul>
              </div>
            </div>
            {/* </div> */}
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
