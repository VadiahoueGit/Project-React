import React from 'react'
import { Typography } from '../ui/typography'
import { BsGrid3X3Gap } from 'react-icons/bs'
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import router from 'next/router';
import Link from 'next/link';

interface props{
    text: string;
    icons: IconType;
    className?: string;
    url?: string
}


export default function NavItems(props: props)  {

    console.log(props)
  return (
    
    <Link href={props.url ?? "/"} className={cn(
        "gap-5 flex items-center rounded-md px-4 duration-300 cursor-pointer text-black", props.className
    )}>
    <props.icons size={20} />
   <Typography variant="body-base">{props.text}</Typography>
</Link>
  )
}
