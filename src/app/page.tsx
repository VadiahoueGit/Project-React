import Image from 'next/image'
import { Seo } from './ui/components/seo'
import { Typography } from './ui/design-system/typography/typography'

export default function Home() {
  return (
    <>
    <Seo title= "Coders Monkeys" description='description'/>
   <Typography variant='h1' component="h1">
  Ixperta Analytics
   </Typography>
    </>

  )
}
