import React from "react";
import logo from "@/images/logo.png";
import Image from "next/image";
import Container from "./ui/Container";
import Form from "next/form";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { User } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignInButton, UserButton } from "@clerk/nextjs";
async function Header() {
  const user = await currentUser();
  return (
    <header className="w-full bg-white py-4 border-b border-b-gray-400 sticky top-0 z-50">
      <Container className="flex items-center justify-between gap-5">
        {/* Logo */}
        <Link href={"/"} className="w-12 h-16 overflow-hidden ">
          <Image
            src={logo}
            alt="logo"
            className="object-center object-cover w-full h-full flex-shrink-0"
            priority
          />
        </Link>
        {/* input */}
        <Form action={"/search"} className="flex-1 ">
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="w-full border-2 border-lightPurple px-4 py-2.5 rounded-md focus-visible:border-darkGray outline-none"
          />
        </Form>
        {/* tabs */}
        <div className="flex items-center gap-5">
          <CartIcon />
          <ClerkLoaded>
            {user ? (
              <div className="flex items-center text-xs md:text-sm gap-1 md:gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                <UserButton />
                <div className="hidden md:inline-flex flex-col">
                  <p className="text-xs">Welcome Back</p>
                  <p className="font-semibold">{user?.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                  <User className="text-lightPurple hover:text-darkGray w-6 h-6" />
                  <div className="flex flex-col">
                    <p className="text-xs">Account</p>
                    <p className="font-semibold">Login</p>
                  </div>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}

export default Header;
