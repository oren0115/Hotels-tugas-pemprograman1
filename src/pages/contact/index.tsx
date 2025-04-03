import React from "react";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";

const contactInfo = [
  {
    icon: "lucide:map-pin",
    title: "Address",
    content: "123 Hotel Street, Cityville, ST 12345",
    link: "https://maps.google.com",
  },
  {
    icon: "lucide:phone",
    title: "Phone",
    content: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: "lucide:mail",
    title: "Email",
    content: "info@bonhotel.com",
    link: "mailto:info@bonhotel.com",
  },
];

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <main className="pt-[100px] pb-16">
      <div className="container mx-auto px-section">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-default-500 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center">
              <CardBody>
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-gold/10 mb-4">
                    <Icon icon={info.icon} className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <a
                    href={info.link}
                    className="text-default-500 hover:text-gold transition-colors">
                    {info.content}
                  </a>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                isRequired
              />

              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                isRequired
              />

              <Select
                label="Subject"
                placeholder="Select a subject"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                isRequired>
                <SelectItem key="general" textValue="General Inquiry">
                  General Inquiry
                </SelectItem>
                <SelectItem key="reservation" textValue="Reservation Question">
                  Reservation Question
                </SelectItem>
                <SelectItem key="feedback" textValue="Feedback">
                  Feedback
                </SelectItem>
                <SelectItem key="support" textValue="Support">
                  Support
                </SelectItem>
              </Select>

              <Textarea
                label="Message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                minRows={4}
                isRequired
              />

              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full">
                Send Message
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default Contact;
