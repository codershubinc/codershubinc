'use client';
import React from 'react';
import CopyTheCodeButton from '../copyTheCodeBtn/copyTheCodeBtn';
import { cn } from '../utils';

interface CodeSpaceComp {
    code?: string;
    codeTitle: string;
    outputCode?: string;
    codeHtmlElement?: JSX.Element;
    copyCode?: string
    style?: string
}

function CodeSpace({ code, codeTitle, outputCode, codeHtmlElement, copyCode, style }: CodeSpaceComp) {

    return (
        <div className={cn('flex flex-col justify-center items-center text-center w-[80%]   mt-2 mx-auto gap-4 border-slate-600 border border-solid rounded-md p-4 bg-gray-900  ', style)}
        >
            <div
                className='font-bold flex justify-between ps-2 text-lg w-full border border-dotted border-slate-600 rounded-md mt-0 py-2 bg-gray-800'
            >
                {codeTitle}
                {copyCode && <CopyTheCodeButton code={copyCode} />}

            </div>
            <pre
                className='whitespace-pre-wrap bg-black w-full h-max min-h-[150px] my-auto rounded-lg'
            >
                <code
                    className='mx-auto w-max whitespace-pre-wrap h-full justify-between flex'
                >
                    {code || codeHtmlElement}

                </code>
            </pre>
            {outputCode && (
                <div
                    className='font-bold text-lg mt-4 text-left w-full  '
                >
                    <div className='font-bold text-lg mt-4 text-left  '>
                        Output:
                    </div>
                    <pre className='text-center'>
                        <code className='whitespace-pre-wrap'>
                            {outputCode}
                        </code>
                    </pre>
                </div>
            )}
        </div>
    );
}

export default CodeSpace;
