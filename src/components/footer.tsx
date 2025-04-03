import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

const footerLinks = {
  hotel: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
  ],
  rooms: [
    { name: "Standard Twin Room", href: "/rooms" },
    { name: "Standard Room", href: "/rooms" },
    { name: "Standard View Room", href: "/rooms" },
    { name: "Deluxe Room", href: "/rooms" },
  ],
  facilities: [
    { name: "Swimming Pool", href: "/facilities" },
    { name: "Restaurant", href: "/facilities" },
    { name: "Spa & Wellness", href: "/facilities" },
    { name: "Conference Room", href: "/facilities" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Contact Us", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: "lucide:facebook", href: "https://facebook.com" },
  { icon: "lucide:twitter", href: "https://twitter.com" },
  { icon: "lucide:instagram", href: "https://instagram.com" },
  { icon: "lucide:linkedin", href: "https://linkedin.com" },
];

export const Footer = () => {
  return (
    <footer className="bg-default-50">
      <div className="container mx-auto px-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Hotel</h3>
            <ul className="space-y-2">
              {footerLinks.hotel.map((link) => (
                <li key={link.name}>
                  <Link
                    as={RouteLink}
                    to={link.href}
                    color="foreground"
                    className="text-default-600 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Rooms</h3>
            <ul className="space-y-2">
              {footerLinks.rooms.map((link) => (
                <li key={link.name}>
                  <Link
                    as={RouteLink}
                    to={link.href}
                    color="foreground"
                    className="text-default-600 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Facilities</h3>
            <ul className="space-y-2">
              {footerLinks.facilities.map((link) => (
                <li key={link.name}>
                  <Link
                    as={RouteLink}
                    to={link.href}
                    color="foreground"
                    className="text-default-600 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    as={RouteLink}
                    to={link.href}
                    color="foreground"
                    className="text-default-600 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-default-600">
            © 2024 Bon Hotel. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-default-600 hover:text-primary">
                <Icon icon={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
