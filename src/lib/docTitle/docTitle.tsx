'use client'
import React from 'react'
import { cn } from '../utils'
interface DocTitleProps {
    title: string
    className: string
}
function DocTitle({ title , className }: DocTitleProps) {
    return (
        <div
            className= {cn('bg-slate-500 dark:bg-slate-900 dark:text-white h-[40px]  m-2 rounded-xl', className)}
        >
            <h1
                className='text-3xl font-bold text-center text-white dark:text-white'
            >
                {title}
            </h1>
        </div>
    )
}

export default DocTitle