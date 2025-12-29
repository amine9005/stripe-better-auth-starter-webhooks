"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/atoms/navigation-menu/navigation-menu";

import { LogOut } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Button, buttonVariants } from "../atoms/button/button";
import Link from "next/link";
import {
  isAuthenticatedAction,
  isSubscribedAction,
  signOutAction,
} from "@/app/api/actions/auth/auth.controller";
import { useEffect, useState } from "react";
interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
];

// const isAuthenticated = await getUser();
// console.log("isAuthenticated: ", isAuthenticated);

export const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const setUser = async () => {
      setIsAuthenticated(await isAuthenticatedAction());
    };
    setUser();
  });

  useEffect(() => {
    const setSubscription = async () => {
      setIsSubscribed(await isSubscribedAction());
    };
    setSubscription();
  });

  return (
    <header
      className="sticky border-b top-0 z-40 w-full  dark:border-b-slate-700 overflow-x-hidden
			bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 h-15 max-h-15
		"
    >
      <NavigationMenu>
        <NavigationMenuList className="container w-screen px-8 min-h-14 flex justify-between ">
          <NavigationMenuItem className="font-bold md:flex hidden">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <span className="uppercase bg-linear-to-r from-[#667EEA] to-[#764BA2] text-transparent bg-clip-text">
                🚀 Next Stripe
              </span>
            </Link>
          </NavigationMenuItem>

          <nav className="md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
            {isAuthenticated && isSubscribed && (
              <Link
                rel="noreferrer noopener"
                href={
                  process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL!
                  // +`?prefilled_email=${user.email}`
                }
                target="_blank"
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                Billing Portal
              </Link>
            )}
          </nav>

          <div className="hidden md:flex gap-2">
            {isAuthenticated && (
              // <form action={signOutAction}>
              <Button
                rel="noreferrer noopener"
                type="submit"
                className={`border ${buttonVariants({ variant: "secondary" })}`}
                onClick={signOutAction}
              >
                Logout
                <LogOut className="w-4 h-4 ml-2" />
              </Button>
              // </form>
            )}

            {!isAuthenticated && (
              <Link
                rel="noreferrer noopener"
                href="/sign-in"
                className={`border ${buttonVariants({ variant: "secondary" })}`}
              >
                Login
              </Link>
            )}

            {isAuthenticated && isSubscribed && (
              <Link
                rel="noreferrer noopener"
                href="/premium"
                // shining animated button with purple gradient
                className={`border bg-linear-to-r from-[#667EEA] to-[#764BA2] text-white ${buttonVariants(
                  {
                    variant: "secondary",
                  },
                )}`}
              >
                Premium ✨
              </Link>
            )}

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
