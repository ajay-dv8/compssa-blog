import { urlForImage } from "@/lib/urlFor"
import Image from "next/image"
import Link from "next/link";


export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return(
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            src={urlForImage(value).url()}
            alt="Image"
            fill
            className="object-contain"
          />
        </div>
      );
    }
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-10 py-5 space-y-5">
        {children}
      </ul>
    ),
    number: ({ children}: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },

  block: {
    h1: ({ children}: any) => (
      <ol className="text-5xl py-10 font-bold">{children}</ol>
    ),
    h2: ({ children}: any) => (
      <ol className="text-5xl py-10 font-bold">{children}</ol>
    ),
    h3: ({ children}: any) => (
      <ol className="text-5xl py-10 font-bold">{children}</ol>
    ),
    h4: ({ children}: any) => (
      <ol className="text-5xl py-10 font-bold">{children}</ol>
    ),

    blockquote: ({ children}: any) => (
      <blockquote className="border-l-[#f7ab0a] border-l-5 my-5 py-5">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value}: any) => {
      const rel = !value.href.startsWith('/')
      ? "noreferrer noopener"
      : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#f7ab0a] hover:decoration-gray-500"  
        >
          {children}
        </Link>
      );
    },
  },
}