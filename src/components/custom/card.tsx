import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function CardComp() {
    return (
        <Card
            className='bg-gray-100 dark:bg-gray-800 w-max m-1   shadow-slate-500 shadow-inner min-w-64 min-h-80 flex flex-col justify-center items-center text-center'
        >
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>

    )
}

export default CardComp