'use client';
import React, { useState } from 'react';

interface CopyCodeButtonProps {
    code: string;
}

function CopyTheCodeButton({ code }: CopyCodeButtonProps) {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopySuccess('Copied!');
            setTimeout(() => setCopySuccess(''), 2000); // Clear the message after 2 seconds
        }, (err) => {
            setCopySuccess('Failed to copy!');
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className='flex items-center gap-2 animate-in animate-fade-in transition-transform duration-300 bg-transparent'>
            <div className="flex items-center gap-2">
                {/* This svg comp is copied from shad cn */}
                <button 
                onClick={copyToClipboard}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm relative z-10 h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground [&amp;_svg]:h-3.5 [&amp;_svg]:w-3.5">
                    <span className="sr-only">Copy</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clipboard ">
                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    </svg>
                </button>
            </div>
            {copySuccess && <span className='text-green-500 text-sm'>{copySuccess}</span>}
        </div>
    );
}

export default CopyTheCodeButton;
