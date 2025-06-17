import React from "react";
import { Button } from "@/components/ui/button";
import IdeaOptions from "./IdeaOptions";

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
        <div className="flex items-center justify-center py-3 px-4 border-2 rounded-full">
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
            <IdeaOptions />
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
        <div className="flex space-x-3">
          <Button variant="secondary" className=" rounded-full cursor-pointer">
            Log in
          </Button>
          <Button className="rounded-full cursor-pointer">Sign Up</Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
