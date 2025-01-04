'use client'
import { useParams } from 'next/navigation'
import React from 'react'

function Page() {
    const {id} = useParams()
    console.log(id)

    return (
        <div>page</div>
    )
}

export default Page