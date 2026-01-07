"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile} className="w-screen px-4 py-2 bg-white border-b dark:bg-black dark:border-b-slate-700 m-auto gap-3 flex justify-center h-content-center items-center h-40 font-mono">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="before:block before:absolute before:-inset-3 before:-skew-y-3 before:bg-black relative inline-block m-10" href='/'>
                <div className="relative text-white text-3xl hover:text-slate-700">Carson Fischl</div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="before:circle before:absolute before:-inset-3 before:-skew-y-3 before:bg-black relative inline-block m-7" href='/about'>
                <div className="relative text-white text-3xl hover:text-slate-700">About</div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="before:circle before:absolute before:-inset-3 before:-skew-y-3 before:bg-black relative inline-block m-7" href='/education'>
                <div className="relative text-white text-3xl hover:text-slate-700">Education</div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="before:circle before:absolute before:-inset-3 before:-skew-y-3 before:bg-black relative inline-block m-7" href='/experience'>
                <div className="relative text-white text-3xl hover:text-slate-700">Experience</div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="before:circle before:absolute before:-inset-3 before:-skew-y-3 before:bg-black relative inline-block m-7" href='/projects'>
                <div className="relative text-white text-3xl hover:text-slate-700">Projects</div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
