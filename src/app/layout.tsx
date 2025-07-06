import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Star Shade Casting',
    default:
      'Star Shade Casting',
  },
  description:
    'StarShade Casting is a forward-thinking casting company founded by Sahaj Bhadoria and Nitin Mahesh Joshi, two passionate professionals dedicated to reshaping the casting landscape of Indian entertainment. The duo first crossed paths while working at the renowned Casting Bay, where they quickly discovered a shared set of values — honesty in work, respect for talent, and a deep commitment to storytelling.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
