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
    title: "Alamat",
    content: "123 Tangerang Banten Indonesia",
    link: "https://maps.google.com",
  },
  {
    icon: "lucide:phone",
    title: "Telepon",
    content: "+62 8123456789",
    link: "tel:+62 8123456789",
  },
  {
    icon: "lucide:mail",
    title: "Email",
    content: "info@tangeranghotel.com",
    link: "mailto:info@tangeranghotel.com",
  },
];

const subjects = [
  { key: "general", label: "Pertanyaan Umum" },
  { key: "reservation", label: "Pertanyaan Reservasi" },
  { key: "feedback", label: "Masukan" },
  { key: "support", label: "Dukungan" },
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
      newErrors.name = "Nama wajib diisi";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Silakan masukkan alamat email yang valid";
    }

    if (!formData.subject) {
      newErrors.subject = "Subjek wajib diisi";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi";
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
      // Simulasi panggilan API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Formulir terkirim:", formData);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Kesalahan saat mengirim formulir:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    // Hapus error saat pengguna mulai mengetik
    if (errors[key as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  return (
    <main className="pt-[100px] pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-default-500 max-w-2xl mx-auto">
            Punya pertanyaan? Kami senang mendengar dari Anda. Kirimkan pesan
            dan kami akan merespons secepatnya.
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
                <h3 className="text-xl font-semibold mb-2">Pesan Terkirim!</h3>
                <p className="text-default-500 mb-4">
                  Terima kasih telah menghubungi kami. Kami akan segera
                  menghubungi Anda kembali.
                </p>
                <Button color="primary" onPress={() => setIsSuccess(false)}>
                  Kirim Pesan Lagi
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Nama"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  isInvalid={!!errors.name}
                  errorMessage={errors.name}
                  isRequired
                />

                <Input
                  type="email"
                  label="Email"
                  placeholder="Masukkan email Anda"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email}
                  isRequired
                />

                <Select
                  label="Subjek"
                  placeholder="Pilih subjek"
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
                  label="Pesan"
                  placeholder="Masukkan pesan Anda"
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
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
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
