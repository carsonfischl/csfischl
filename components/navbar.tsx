"use client"

import * as React from "react"
import Link from "next/link"
import { Globe } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useLocale, useTranslations } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { use } from "react"
import { setRequestLocale } from "next-intl/server"

interface Props {
  params: Promise<{ locale: string }>
}

export function Navbar() {
  const isMobile = useIsMobile()
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "fr" : "en"
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPathname)
  }

  const t = useTranslations('Navbar');

  return (
    <NavigationMenu viewport={isMobile} className="w-100-vw bg-white border-b dark:bg-black dark:border-b-slate-700 m-auto gap-3 flex justify-center h-content-center items-center h-20 font-mono lg:text-2xl md:text-lg sm:text-md text-md">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">{t('home')}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about">{t('about')}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/education">{t('education')}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/experience">{t('experience')}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/projects">{t('projects')}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button
            onClick={toggleLocale}
            className={navigationMenuTriggerStyle()}
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5" />
            <span className="ml-2">{locale.toUpperCase()}</span>
          </button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
