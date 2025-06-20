import React from "react";
import { Button } from "@/components/ui/button";
import IdeaOptions from "./IdeaOptions";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignRight } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between  py-2 px-2">
        <div className="logo gap-x-3 flex items-center text-xl font-bold">
          <img
            src="https://images.scalebranding.com/elegant-letter-a-logo-445a50f2-d34e-48e3-ab23-917129340dba.jpg"
            className="w-10 rounded-full"
            alt=""
          />
          <p>Abhiyan design tech</p>
        </div>

        <div className="hidden md:flex items-center justify-center py-3 px-4 border-2 rounded-full">
          {/* Navigation Items */}
          <ul className="flex items-center space-x-6">
            <li>
              <a
                href="#home"
                className="text-muted-foreground font-semibold hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-muted-foreground font-semibold hover:text-white transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#buyelectronics"
                className="text-muted-foreground font-semibold hover:text-white transition-colors duration-300"
              >
                Buy electronics
              </a>
            </li>
            <IdeaOptions classes="text-muted-foreground" />
            <li>
              <a
                href="#past-project"
                className="text-muted-foreground font-semibold hover:text-white transition-colors duration-300"
              >
                Past Project
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-muted-foreground font-semibold hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex space-x-3">
          <Button variant="secondary" className=" rounded-full cursor-pointer">
            Log in
          </Button>
          <Button className="rounded-full cursor-pointer">Sign Up</Button>
        </div>

        {/* Sidebar navbar */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <AlignRight
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  strokeWidth={2.5}
                />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full p-4 backdrop-blur-lg bg-background/80"
            >
              <p className="text-muted-foreground">Menu</p>
              <nav className="flex flex-col gap-3 ">
                <li className="list-none text-xl font-semibold">
                  <a href="#home">Home</a>
                </li>
                <li className="list-none text-xl font-semibold">
                  <a href="#services">Services</a>
                </li>
                <li className="list-none text-xl font-semibold">
                  <a href="#buyelectronics">Buy electronics</a>
                </li>

                <IdeaOptions classes="text-xl font-semibold text-start text-white" />
                <li className="list-none text-xl font-semibold">
                  <a href="#past-project">Past Project</a>
                </li>
                <li className="list-none text-xl font-semibold">
                  <a href="#about">About</a>
                </li>
                {/* Add IdeaOptions if needed here */}
                <div className="mt-6 flex flex-col gap-2">
                  <Button variant="secondary">Log in</Button>
                  <Button>Sign Up</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
