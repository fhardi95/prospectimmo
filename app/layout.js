import { Sora, DM_Mono } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata = {
  title: 'ProspectImmo — Find motivated home sellers automatically',
  description: 'ProspectImmo identifies homeowners ready to sell and reaches out on your behalf. Close more deals, do less manual work.',
  openGraph: {
    title: 'ProspectImmo',
    description: 'Automated lead generation for real estate agents.',
    url: 'https://prospectimmo.com',
    siteName: 'ProspectImmo',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmMono.variable}`}>
      <body className="bg-navy-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
