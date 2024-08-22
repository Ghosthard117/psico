import { createClient } from "@/prismicio"
import Link from "next/link"
import { PrismicNextLink } from "@prismicio/next"

import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { PrismicRichText } from "@prismicio/react";

export default async function Footer() {
  const client = createClient()
  const settings = await client.getSingle("settings")

  const date = new Date()

  const icon: { [key: string]: JSX.Element } = {
    instagram: <FaInstagram />,
    facebook: <FaFacebook />,
    twitter: <FaXTwitter />,
    linkedin: <FaLinkedin />,
  }

  return (
    <footer
      className="flex flex-col items-center justify-between gap-6 px-8 py-7 bg-gray-10 text-white-100"
    >

      <div className="flex flex-col md:flex-row max-w-6xl w-full justify-between my-4">
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="font-bold text-3xl"
          >
            {settings.data.site_title}
          </Link>
          <p className="text-gray-90 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex flex-row justify-around">
            {settings.data.social_media.map((item, index) => (
              <div
                key={index}
                className="flex align-center justify-center rounded-full text-white-100 bg-gray-30 p-4"
              >
                <PrismicNextLink
                  field={item.icon_link}
                >
                  {item.icons && icon[item.icons]}
                </PrismicNextLink>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-white-100 text-base">Links</h2>
          {settings.data.navigation.map(item => (
            <PrismicNextLink
              key={item.label}
              field={item.link}
              className="text-sm text-gray-90 hover:text-primary-60"
            >
              {item.label}
            </PrismicNextLink>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-white-100 text-base" id="contacto">Contacto</h2>
          {settings.data.contact.map((item, index) => (
            <p className="text-sm text-gray-90" key={index} >
              <PrismicRichText
                field={item.item}
              />
            </p>
          ))}
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto justify-between bg-gray-20 inline-flex py-4 px-8 md:py-10 md:px-12 rounded-3xl md:rounded-[32px]">
        <div>
          <p className="text-gray-50">
            ©{date.getFullYear()} All Rights Reserved
          </p>
        </div>
        <div>
          <p className="text-primary-50">
            {settings.data.site_title}
          </p>
        </div>
      </div>
    </footer>
  )
}

{/* <Link href="/">
        <span className="text-primary-50">Psicomente</span>
      </Link> */}

{/* <nav aria-label="Footer">
        <ul className="flex gap-6">
          {settings.data.navigation.map(item => (
            <li key={item.label}>
              <PrismicNextLink
                field={item.link}
                className="inline-flex min-h-11 items-center"
              >
                {item.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav> */}