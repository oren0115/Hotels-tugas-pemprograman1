import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { FacilitiesSection } from "../../components/facilities-section";
import { RoomsSection } from "../../components/rooms-section";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="pt-[80px]">
      <section
        className="h-hero relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("/img/hero-section.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SELAMAT DATANG DI TANGERANG HOTELS
          </h1>
          <Button
            size="lg"
            color="primary"
            className="bg-[#FFD700] hover:bg-[#DAA520]  font-bold"
            onPress={() => navigate("/rooms")}>
            JELAJAHI
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4">{/* <BookingForm /> */}</div>

      <FacilitiesSection />
      <RoomsSection />

      <section className="py-16 bg-[#FFD700] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Pesan kamar sekarang juga!</h2>
        <Button
          size="lg"
          variant="bordered"
          className="border-white text-white hover:bg-white hover:text-[#FFD700]"
          onClick={() => navigate("/explore")}>
          Pesan Sekarang
        </Button>
      </section>
    </main>
  );
};

export default Home;
