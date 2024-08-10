import React, { Suspense } from "react";
import BaseContainer from "../container/BaseContainer";
import Link from "next/link";
import { FacebookIcon, TwitterIcon, XIcon, YoutubeIcon } from "lucide-react";
import CategorySearch from "@/components/courses/FilterAndSearch/CategorySearch";

const links: { name: string; path: string; category: boolean }[] = [
  {
    name: "Home",
    path: "/",
    category: false,
  },
  {
    name: "Trending Course",
    path: "web-dev",
    category: true,
  },
  {
    name: "All Courses",
    path: "/courses",
    category: false,
  },
  {
    name: "Frontend",
    path: "front-dev",
    category: true,
  },
  {
    name: "ML",
    path: "machine-learning",
    category: true,
  },
];
const Footer = () => {
  return (
    <BaseContainer>
      <footer className="opacity-50 bottom-0">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center my-7 gap-5 ">
          <div className="flex flex-wrap gap-5 justify-center items-center">
            {links.map((link, index) => (
              <div key={link.name + index}>
                {link.category ? (
                  <Suspense fallback={<div></div>}>
                    <CategorySearch category={link.path}>
                      {link.name}
                    </CategorySearch>
                  </Suspense>
                ) : (
                  <Link className="hover:underline " href={link.path}>
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-5 ">
            <FacebookIcon />
            <YoutubeIcon />
            <TwitterIcon />
          </div>
        </div>
        <hr />
        <p className="my-5">© Copyright Enilno Online Learning 2024</p>
      </footer>
    </BaseContainer>
  );
};

export default Footer;
