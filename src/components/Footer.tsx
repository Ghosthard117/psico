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
import { asText } from "@prismicio/client";

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
      className="flex flex-col items-center justify-between md:gap-6 gap-12 px-8 py-7 md:py-16 bg-gray-10 text-white-100"
    >

      <div className="flex flex-col md:flex-row max-w-6xl w-full justify-between gap-8">
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="font-bold text-3xl font-lato"
          >
            {settings.data.site_title}
          </Link>
          <p className="text-gray-90 text-sm font-montserratAlternates">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex flex-row justify-around">
            {settings.data.social_media.map((item, index) => (
              <div
                key={index}
                className="flex align-center justify-center rounded-full text-white-100 bg-gray-30 p-4 hover:text-primary-60"
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
          <h2 className="font-bold text-base">Links</h2>
          {settings.data.navigation.map(item => (
            <PrismicNextLink
              key={item.label}
              field={item.link}
              className="text-sm text-gray-90 hover:text-primary-60 font-montserratAlternates"
            >
              {item.label}
            </PrismicNextLink>
          ))}
        </div>

        <div className="flex flex-col gap-3" id="contact">
          <h2 className="font-bold text-base">Contacto</h2>
          {settings.data.contact.map(item => (
            <PrismicRichText
              key={asText(item.item)}
              field={item.item}
              components={{
                paragraph: ({ children }) => (
                  <p
                    className="font-montserratAlternates text-sm text-gray-90"
                  >
                    {children}
                  </p>
                )
              }}
            />
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
