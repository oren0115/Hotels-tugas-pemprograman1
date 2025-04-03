import React from "react";
import { Card, CardBody, Button } from "@heroui/react";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Front Desk Manager",
      department: "Operations",
      location: "Main Hotel",
      type: "Full-time",
    },
    {
      title: "Executive Chef",
      department: "Food & Beverage",
      location: "Main Hotel",
      type: "Full-time",
    },
    {
      title: "Housekeeping Supervisor",
      department: "Housekeeping",
      location: "Main Hotel",
      type: "Full-time",
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Careers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join our team and be part of something extraordinary
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card>
            <CardBody>
              <h2 className="text-2xl font-semibold mb-4">Why Work With Us</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">
                    Competitive salary and benefits package
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">
                    Professional development opportunities
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">
                    Collaborative and inclusive work environment
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">Work-life balance initiatives</p>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <div>
          <Card>
            <CardBody>
              <h2 className="text-2xl font-semibold mb-4">Our Culture</h2>
              <p className="text-gray-600 mb-4">
                We foster a culture of innovation, respect, and continuous
                learning. Our team members are our greatest asset, and we invest
                in their growth and development.
              </p>
              <p className="text-gray-600">
                Join us in creating exceptional experiences for our guests while
                building a rewarding career in hospitality.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {jobOpenings.map((job, index) => (
              <div key={index}>
                <Card>
                  <CardBody>
                    <h3 className="text-xl font-medium mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-2">
                      Department: {job.department}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Location: {job.location}
                    </p>
                    <p className="text-gray-600 mb-4">Type: {job.type}</p>
                    <Button color="primary" variant="solid">
                      Apply Now
                    </Button>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
