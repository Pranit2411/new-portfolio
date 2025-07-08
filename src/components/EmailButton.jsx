import { useState } from "react";

const EmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "pranitmenkar24@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
    return (
        <button onClick={copyToClipboard} className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden">
            {copied ? (<p className="flex items-center justify-center gap-2">
                <img src="assets/copy-done.svg" className="w-5" alt="Copy Icon"/>
                Email has Copied</p>) : (
            <p className="flex items-center justify-center gap-2">
                <img src="assets/copy.svg" className="w-5" alt="Copy Icon" />
                Copy Email Address
            </p>)}
        </button>
    );
};

export default EmailButton;