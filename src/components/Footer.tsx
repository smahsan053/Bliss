import React from "react";
import Container from "./ui/Container";
import Image from "next/image";
import payment from "@/images/payment.png";
import logo from "@/images/logo.png";
function Footer() {
  return (
    <footer className="bg-lightBg text-sm">
      <Container className="py-5 flex items-center justify-between">
        <p className="text-gray-500">
          Copyright © 2024{" "}
          <span className="text-lightPurple font-semibold">
            <Image
              src={logo}
              alt="Company Logo"
              className="w-4 h-5 object-cover inline-block"
            />{" "}
            Bliss
          </span>{" "}
          all rights reserved
        </p>
        <Image src={payment} alt="payment" className="w-64 object-cover" />
      </Container>
    </footer>
  );
}

export default Footer;
