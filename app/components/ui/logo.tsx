"use client"

import Link from "next/link"

export function Logo() {
  return (
    <Link 
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <div className="relative w-8 h-8">
          <img width=32 height=32 src='/icons/icon-192x192.png'>
      </div>
      <span className="font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        VCUS
      </span>
    </Link>
  )
}
