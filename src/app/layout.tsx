import NavigationMenu from '@/components/NavigationMenu'
import ReactQueryProvider from '@/providers/ThemeRegistry/ReactQueryProvider'
import ThemeRegistry from '@/providers/ThemeRegistry/ThemeRegistry'
import { Box } from '@mui/material'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Project Revenant',
  description: 'cEDH Decklist builder - Project Revenant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <ReactQueryProvider>
          <ThemeRegistry>
          <Box sx={{ display: 'flex', height: '100vh',  [`@media screen and (max-width: 650px)`]: {
                backgroundColor: 'red', 
                display: 'flex', 
            }, }}>
            <NavigationMenu />
            <Box sx={{ flexGrow: 1, height: '100%' }}>
              {children}
            </Box>
          </Box>
          </ThemeRegistry>
          </ReactQueryProvider>
          </body>
    </html>
  )
}
