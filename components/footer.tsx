'use client'

import MylogoDark from '@/public/assets/Mylogo.png'
import MylogoLight from '@/public/assets/MylogoWhite.png'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { title: 'Features', href: '#' },
  { title: 'Solution', href: '#' },
  { title: 'Customers', href: '#' },
  { title: 'Pricing', href: '#' },
  { title: 'Help', href: '#' },
  { title: 'About', href: '#' },
]

export default function FooterSection() {
  const { resolvedTheme } = useTheme()

  return (
    <footer className="pb-8 md:pb-8">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center my-2">Powered By:</p>
        <div className="flex justify-center items-center mb-6">
          <Image
            src={resolvedTheme === 'dark' ? MylogoLight : MylogoDark}
            alt="Timothy Logo"
            width={200}
            height={100}
            className="transition-all duration-300"
          />
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} Timothy Sucgang.Dev , All rights reserved
        </span>
      </div>
    </footer>
  )
}
