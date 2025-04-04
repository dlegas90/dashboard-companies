import React from 'react'
import { SidebarItemProps } from './SidebarItem.types'
import Link from 'next/link' 
import { cn } from '@/lib/utils'

export function SidebarItem(props: SidebarItemProps) {
    const { item } = props
    const { href, icon: Icon, label } = item

    return (
        <Link href={href} className={cn(`flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 rounded-lg cursor-pointer`)}>
            <Icon className="h-5 w-5" strokeWidth={1} />
            <p className='text-black text-xs dark:text-white'>{label}</p>
        </Link>
    )
}
