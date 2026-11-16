import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { NavbarContent } from "@/content/portfolio.types";

const Navbar = ({ content }: { content: NavbarContent }) => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const Icon = open ? X : Menu;
  const navLinks = [
    { id: "about", title: content.labels.about },
    { id: "work", title: content.labels.work },
    { id: "contact", title: content.labels.contact },
  ];

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-secondary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a href={import.meta.env.BASE_URL}>
          <p>
            {content.brandName} &nbsp;
            <span className="sm:block hidden">| {content.brandTagline}</span>
          </p>
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Icon
            className="w-[28px] h-[28px] cursor-pointer text-black"
            onClick={() => setOpen(!open)}
          />
          <div
            className={`${open ? "flex" : "hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setOpen(!open);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
