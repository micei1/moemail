"use client"

import Link from "next/link"

export function Logo() {
  return (
    <Link 
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
          <img width=32 height=32 src='/icons/icon-192x192.png'>
      <span className="font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        VCUS
      </span>
    </Link>
  )
}
