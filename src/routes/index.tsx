import React from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "@heroui/react";

const Home = React.lazy(() => import("../pages/home"));
const Rooms = React.lazy(() => import("../pages/rooms"));
const RoomDetail = React.lazy(() => import("../pages/rooms/room-detail"));
const RateOptions = React.lazy(() => import("../pages/rooms/rate-options"));
const Explore = React.lazy(() => import("../pages/explore"));
const Facilities = React.lazy(() => import("../pages/facilities"));
const Contact = React.lazy(() => import("../pages/contact"));
const About = React.lazy(() => import("../pages/about"));
const Careers = React.lazy(() => import("../pages/careers"));
const Press = React.lazy(() => import("../pages/press"));
const Blog = React.lazy(() => import("../pages/blog"));

export const AppRoutes = () => {
  return (
    <React.Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <Spinner size="lg" color="primary" />
        </div>
      }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/rooms/:id/rates" element={<RateOptions />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </React.Suspense>
  );
};
