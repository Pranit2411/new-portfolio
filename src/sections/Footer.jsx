import { mySocials } from "../constants";   
const Footer = () => {
    return (
        <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space" id="contact">
            <h2 className="text-heading text-neutral-50">Contact Me</h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
            <div className="flex md:flex-row md:gap-5 gap-5 items-center">
                {mySocials.map((social, index) => (
                    <a
                        href={social.href}
                        key={index}
                        target="_blank"
                    >
                        <div className="flex flex-col items-center gap-2 hover-animation">
                            <img src={social.icon} className="w-20 h-20 " alt={social.name}/>
                            <p className="text-neutral-300 text-center text-2xl">{social.username}</p>
                        </div>
                    </a>
                   
                ))}
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
            <div>
                <p className="flex gap-2">Terms & conditions |</p>
                <p>Privacy Policy</p>
            </div>
            
            <p>© 2025 Pranit Menkar. All rights reserved</p>
        </section>
    );
};

export default Footer;