'use client'
import React from 'react'

function PageUi({children}: {children: React.ReactNode}) {
  return (
    <div
    className=' bg-slate-500 dark:bg-black dark:text-white min-h-screen h-max'
    >
        {children}
    </div>
  )
}

export default PageUi