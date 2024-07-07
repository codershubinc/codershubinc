/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react'
import CodeSpace from '@/lib/codeSpace/codeSpace'
import PageUi from '@/lib/pageUi/PageUi'
import DocTitle from '@/lib/docTitle/docTitle'
import SideBarComp from '@/lib/sidebarComp/sideBarComp'
import { HamburgerIcon, CrossIcon } from '@/assets/images/index'
import Image from 'next/image'
import { sideBarCompArray } from './sideBarLinksArray'

function page() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <PageUi>
            <DocTitle
                title='Start with Simple Print Statement'
                className=''
            />
            <div>
                <div>
                    <SideBarComp
                        arrayOfLinksWithTitle={sideBarCompArray}
                        isVisible={isVisible}
                    />
                    <div
                        className={`h-[40px]  fixed left-0 top-0 cursor-pointer `}
                        onClick={() => setIsVisible(!isVisible)}
                    >
                        <Image
                            src={!isVisible ? HamburgerIcon : CrossIcon}
                            alt="HamBergerIcon"
                            width={30}
                            height={30}
                            className='w-10 h-10 m-2 invert transition-transform duration-700 hover:bg-slate-100 hover:p-2 rounded-lg'
                        />
                    </div>
                </div>
                <div id='print-hello-world'>
                    <h2 className='text-center text-lg justify-center items-center flex flex-col h-max my-auto text-slate-500'>
                        Start your python coding journey with this simple print statement.
                    </h2>
                    <CodeSpace
                        codeTitle='Print  Hello, World!'
                        codeHtmlElement={
                            <div
                                className="text-center justify-center items-center flex flex-col h-max my-auto "
                            >
                                <code className='flex flex-row'>
                                    <p className='text-green-400'>print</p>
                                    <span className='text-red-400'>(</span>&quot;Hello, World!&quot;<span className='text-red-400'>)</span>
                                </code>
                            </div>
                        }
                        outputCode='Hello, World!'
                        copyCode='print(&quot;Hello, World!&quot;)'
                        style=' h-[330px]'
                    />

                </div>
                <div id="print-hello-world-with-variable">
                    <h2 className='text-center text-lg justify-center items-center flex flex-col h-max my-auto text-slate-500'>
                        Print Hello, World! with a variable
                    </h2>
                    <CodeSpace
                        codeTitle='Print  Hello, World!'
                        codeHtmlElement={
                            <div
                                className="text-center justify-center items-center flex flex-col h-max my-auto "
                            >
                                <code className='flex flex-row' >
                                    <p className='text-green-400'>name</p>
                                    <span className='text-red-400'>=</span>&quot;World!&quot;

                                </code>
                                <code className='flex flex-row'>
                                    <p className='text-green-400'>print</p>
                                    <span className='text-red-400'>(</span>
                                    <p className='text-green-400'>{`'Hello'`}</p>
                                    <p className='text-green-400'> + name</p>
                                    <span className='text-red-400'>)</span>

                                </code>
                                <code className='flex flex-row'>
                                    <p className='text-green-400'>print</p>
                                    <span className='text-red-400'>(</span>
                                    <p className='text-green-400'>{`'Hello'`}</p>
                                    <p className='text-green-400'> , name</p>
                                    <span className='text-red-400'>)</span>

                                </code>

                            </div>
                        }
                        outputCode='Hello, World!'
                        copyCode={`name = "World!"\nprint("Hello" , name)\nprint("Hello" + name)`}
                        style=' h-[330px]'
                    />
                </div>
                <div id="types-of-variables">
                    <h2 className='text-center text-lg justify-center items-center flex flex-col h-max my-auto text-slate-500'>
                        Types of Variables
                    </h2>
                    <CodeSpace
                        codeTitle='Types of Variables'
                        codeHtmlElement={
                            <div
                                className="text-center justify-center items-center flex flex-col h-max my-auto "
                            >
                                <code>
                                    <div className='flex flex-row'>
                                        <p className='text-green-400'>name</p>
                                        <span className='text-red-400'> = </span>&quot;World!&quot;
                                    </div>
                                    <div>
                                        <p className='text-gray-700'>
                                            # This is a string
                                        </p>
                                    </div>

                                </code>
                                <code>
                                    <div className='flex flex-row'>
                                        <p className='text-green-400'>number</p>
                                        <span className='text-red-400'> = </span>100
                                    </div>
                                    <div>
                                        <p className='text-gray-700'>
                                            # This is a number
                                        </p>
                                    </div>

                                </code>
                                <code>
                                    <div className='flex flex-row'>
                                        <p className='text-green-400'>arr</p>
                                        <span className='text-red-400'> = </span>
                                        [1, 2, 3, 4, 5]
                                    </div>
                                    <div>
                                        <p className='text-gray-700'>
                                            # This is a array of numbers
                                        </p>
                                    </div>

                                </code>
                                <code>
                                    <div className='flex flex-row'>
                                        <p className='text-green-400'> array_of_multiple_data_type  </p>
                                        <span className='text-red-400'> = </span>
                                        {`[1, 2, 3, "Hello", 4, 5, "World!"]`}
                                    </div>
                                    <div>
                                        <p className='text-gray-700'>
                                            # This is a array of  different data types
                                        </p>
                                    </div>

                                </code>
                            </div>
                        }
                        copyCode={`name = "World!"\nnumber = 100\narr = [1, 2, 3, 4, 5]\narray_of_multiple_data_type = [1, 2, 3, "Hello", 4, 5, "World!"]\n# Try to print all the variables`}
                        style=' h-[330px]'
                    />
                </div>

            </div>

        </PageUi>

    )
}

export default page