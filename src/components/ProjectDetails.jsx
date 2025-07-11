/* eslint-disable no-unused-vars */
import { img } from "motion/react-client";

const ProjectDetails = ({title, description, subDescription, image, tags, href}) => {


    return (
        <div className="relative inset-0 z-10 flex items-center justify-center w-full h-full overflow-hidden mt-12">
            <div className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 hover-animation">
                
                <img src={image} alt={title} className="w-full rounded-t-2xl"/>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
                    <p className="mb-3 font-normal text-neutral-400">{description}</p>
                    {subDescription.map((subDesc, index) => (
                        <p className="mb-3 font-normal text-neutral-400">{subDesc}</p>
                    ))}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-3">
                            {tags.map((tag) => (
                                <img key={tag.id} src={tag.path} alt={tag.name} className="rounded-lg size-10 hover-animation"/>
                            ))}
                        </div>
                        <a href={href} target="_blank" className="inline-flex items-center gap-1 font-medium hover-animation">View Project
                            <img src="assets/arrow-up.svg" className="size-4" href={href} alt="Arrow up"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectDetails;
