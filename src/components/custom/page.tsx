import { cn } from '@/lib/utils'
import React  from 'react'

function Page(
    {
        Children,
        style
    }: {
        Children: React.ReactNode
        style?: string
    }
) {
    return (
        <main
            className={cn('flex flex-col justify-center items-center', style)}
        >
            {Children}
        </main>
    )
}

export default Page