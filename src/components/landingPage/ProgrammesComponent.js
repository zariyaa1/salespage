
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";


const ZariyaaOfferingProgramsComponent = () => {

    return (<>
        <div className="min-h-screen">
            <div>
                <p> Discover Our Transformative Solutions ↓</p>
            </div>

            <div className="flex flex-col gap-2">

                <div className="flex flex-col gap-5 ">
                    <AnimatedProgramComponent
                        title={'Wellness Festivals'}
                        subTitle={'Joyful Celebration and Engagement events'}
                        image={'/wellnessretreats.png'}
                        learnMoreUrl={'https://example.com'}
                    />
                    <AnimatedProgramComponent
                        title={'Wellness Festivals'}
                        subTitle={'Joyful Celebration and Engagement events'}
                        image={'/wellnessretreats.png'}
                        learnMoreUrl={'https://example.com'}
                    />
                    {/* two vertical  */}
                </div>
                <div className="flex gap-5">
                    {/* three horizontal */}
                    <AnimatedProgramComponent
                        title={'Wellness Festivals'}
                        subTitle={'Joyful Celebration and Engagement events'}
                        image={'/wellnessretreats.png'}
                        learnMoreUrl={'https://example.com'}
                    />
                    <AnimatedProgramComponent
                        title={'Wellness Festivals'}
                        subTitle={'Joyful Celebration and Engagement events'}
                        image={'/wellnessretreats.png'}
                        learnMoreUrl={'https://example.com'}
                    />   <AnimatedProgramComponent
                        title={'Wellness Festivals'}
                        subTitle={'Joyful Celebration and Engagement events'}
                        image={'/wellnessretreats.png'}
                        learnMoreUrl={'https://example.com'}
                    />
                </div>
            </div>
        </div>
    </>)
}

export default ZariyaaOfferingProgramsComponent;


const AnimatedProgramComponent = ({ title, subTitle, image, learnMoreUrl }) => {
    return (
        <div

        >
            <div
                className="relative w-full h-48 bg-cover bg-center rounded-2xl p-5"
                style={{ backgroundImage: `url(${image})` }}
            >

                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{subTitle}</p>
                <Link
                    href={learnMoreUrl}
                    target="_blank"
                    className="mt-4 inline-block bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 transition"
                >
                    Learn More
                </Link>
            </div>

        </div>
    );
};
