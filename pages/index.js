import Head from 'next/head'
import { Inter } from 'next/font/google'
import ContainerBlock from '@/components/ContainerBlock'
import Banner from '@/components/Banner'
import AboutMe from '@/components/AboutMe'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ContainerBlock
    title='Home'
    description='Developer Home'
    >
       <Banner />
       <AboutMe />
    </ContainerBlock>
  )
}
