import Card from '../components/Card';
import EmailButton from '../components/EmailButton';

const About = () => {
    return (
        <section className="c-space section-spacing" id='about'>
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                <div className="flex items-end grid-default-color grid-1">
                    <img src="assets/coding-pov.png" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Pranit Menkar</p>
                        <p className="subtext">Over the years, I’ve built a strong foundation in software engineering and data science through hands-on experience in academic projects, internships, and personal learning.</p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
                </div>
                <div className="grid-default-color grid-2">
                    <div className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                            Code is .. 
                        </p>
                        <Card image="assets/logos/python-logo-only.svg" style={{rotate: "75deg", top: "30%", left: "20%"}}/>
                        <Card image ="assets/logos/javascript.svg" style={{rotate: "-30deg", top: "60%", left: "45%"}}/>
                        <Card image ="assets/logos/java-icon.svg" style={{rotate: "90deg", bottom: "30%", left: "70%"}}/>
                        <Card image ="assets/logos/github.svg" style={{rotate: "-45deg", top: "55%", left: "0%"}}/>
                        <Card image ="assets/logos/git.svg" style={{rotate: "20deg", top: "10%", left: "38%"}}/>
                        <Card image="assets/logos/visualstudiocode.svg" style={{rotate: "30deg", top: "70%", left: "70%"}}/>
                        <Card image="assets/logos/cplusplus.svg" style={{rotate: "30deg", top: "70%", left: "30%"}}/>
                        <Card image="assets/logos/html5.svg" style={{rotate: "15deg", top: "20%", left: "80%"}}/>
                        <Card image="assets/logos/css3.svg" style={{rotate: "120deg", top: "15%", left: "60%"}}/>
                        <Card image="assets/logos/csharp.svg" style={{rotate: "60deg", top: "5%", left: "10%"}}/>
                        <Card image="assets/logos/mysql-official.svg" style={{rotate: "10deg", top: "80%", left: "10%"}}/>
                        <Card image="assets/logos/react.svg" style={{rotate: "-10deg", top: "80%", left: "85%"}}/>
                    </div>
                </div>
                <div className="grid-black-color grid-3">
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>Time Zone</p>
                        <p>I'm based in New Jersey, USA and open to remote work worldwide</p>
                        <img src="assets/earth.png" className="absolute left-[30%] top-[0%]" />
                    </div>
                </div>
                <div className="grid-special-color grid-4">
                    <div className='flex flex-col items-center justify-center gap-4 size-full'>
                        <p className='headtext text-center'>
                            Do you want to start a project together?
                        </p>
                        <p className='headtext text-center'>
                            pranitmenkar24@gmail.com
                        </p>
                        <EmailButton />
                    </div>
                </div>
                <div className="grid-default-color grid-5">
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>Tech Stack</p>
                        <p className='subText'>I specialize in a variety of languages, frameworks and tools that allow me to build robust and scalable applications</p>
                        
                    </div>
                    <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'> 
                       <img src="assets/TechStack.png" className="absolute h-60 left-[15%]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;