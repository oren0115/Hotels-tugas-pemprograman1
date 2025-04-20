import React from "react";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
  Spinner,
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

const subjects = [
  { key: "general", label: "General Inquiry" },
  { key: "reservation", label: "Reservation Question" },
  { key: "feedback", label: "Feedback" },
  { key: "support", label: "Support" },
];

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    // Clear error when user starts typing
    if (errors[key as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  return (
    <main className="pt-[100px] pb-16">
      <div className="container mx-auto px-4">
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
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="p-3 rounded-full bg-success/10 mb-4 inline-block">
                  <Icon icon="lucide:check" className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-default-500 mb-4">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
                <Button
                  color="primary"
                  onPress={() => setIsSuccess(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  isInvalid={!!errors.name}
                  errorMessage={errors.name}
                  isRequired
                />

                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email}
                  isRequired
                />

                <Select
                  label="Subject"
                  placeholder="Select a subject"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  isInvalid={!!errors.subject}
                  errorMessage={errors.subject}
                  isRequired>
                  {subjects.map((subject) => (
                    <SelectItem key={subject.key} textValue={subject.label}>
                      {subject.label}
                    </SelectItem>
                  ))}
                </Select>

                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  minRows={4}
                  isInvalid={!!errors.message}
                  errorMessage={errors.message}
                  isRequired
                />

                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                  startContent={isSubmitting ? <Spinner size="sm" /> : null}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default Contact;
