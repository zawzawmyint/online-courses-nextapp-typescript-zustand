import Link from "next/link";

import CategorySearch from "@/components/courses/FilterAndSearch/CategorySearch";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { UserIcon } from "lucide-react";
import React, { Suspense } from "react";

const Links: {
  title: string | React.ReactNode;
  href: string;
  category: boolean;
}[] = [
  {
    title: "All Courses",
    href: "/courses",
    category: false,
  },
  {
    title: "Frontend",
    href: "front-dev",
    category: true,
  },
  {
    title: "ML",
    href: "machine-learning",
    category: true,
  },
];

export function NavigationItems() {
  const isSignIn = false;

  const AuthLinks: {
    title: string | React.ReactNode;
    href: string;
    category: boolean;
  }[] = [
    {
      title: "New User",
      href: "/users/sign_up",
      category: false,
    },
    {
      title: isSignIn ? <UserIcon /> : "Sign In",
      href: isSignIn ? "/profile" : "/users/sign_in",
      category: false,
    },
  ];

  return (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList className="  flex flex-wrap flex-col sm:flex-row justify-center items-center gap-3">
        {Links.map((l, i) => (
          <NavigationMenuItem key={i}>
            {l.category ? (
              <Suspense fallback={<div></div>}>
                <CategorySearch category={l.href}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {l.title}
                  </NavigationMenuLink>
                </CategorySearch>
              </Suspense>
            ) : (
              l.href && (
                <Link href={l.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {l.title}
                  </NavigationMenuLink>
                </Link>
              )
            )}
          </NavigationMenuItem>
        ))}
        {isSignIn && (
          <NavigationMenuItem>
            <Link href={"/my_courses"} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-primary font-semibold">My Courses</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
        {AuthLinks.map((l, i) => (
          <NavigationMenuItem key={i}>
            <Link href={l.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {l.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
