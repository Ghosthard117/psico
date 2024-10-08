"use client"

import { useState, useMemo } from "react"
import { usePathname } from "next/navigation"
import { asLink, Content } from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import { MdMenu, MdClose } from "react-icons/md"
import clsx from "clsx"
import Link from "next/link"

type NavbarProps = {
  settings: Content.SettingsDocument
}

export default function Navbar({ settings }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const memoizedSettings = useMemo(() => settings, [settings])

  return (
    <nav
      className="md-:py-6 px-4 py-4 md:px-6"
      aria-label="Main"
    >
      <div
        className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-lato text-gray-10 md:flex-row md:items-center"
      >
        <div
          className="flex items-center justify-between"
        >
          <Link
            href="/"
            className="z-50 text-primary-50 font-bold text-xl"
            onClick={() => setOpen(false)}
          >
            {memoizedSettings.data.site_title}
          </Link>
          <button
            type="button"
            className="block p-2 text-3xl text-gray-10 md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MdMenu />
            <span className="sr-only">Open Menu</span>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={clsx(
            "gap-3 fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end bg-primary-50 pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden text-white-100",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            type="button"
            className="fixed right-4 top-4 mb-4 block p-2 text-3xl md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(false)}
          >
            <MdClose />
            <span className="sr-only">Close Menu</span>
          </button>

          <div className="grid justify-items-end gap-8">
            {memoizedSettings.data.navigation.map(item => {
              return (
                <PrismicNextLink
                  key={item.label}
                  field={item.link}
                  className="block px-3 text-3xl first:mt-8"
                  onClick={() => setOpen(false)}
                  aria-current={
                    pathname.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </PrismicNextLink>
              )
            })}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden gap-6 md:flex">
          {memoizedSettings.data.navigation.map(item => {
            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className="inline-flex min-h-11 items-center hover:text-primary-60"
                  aria-current={
                    pathname.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
