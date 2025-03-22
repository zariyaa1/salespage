import Image from "next/image";

const HealingTechniquesComponent = () => {
    const healingTechniques = [
        {
            imgUrl: '/meditation.png',
            title: 'Meditation',
        },
        {
            imgUrl: '/yoga.png',
            title: 'Yoga',
        },
        {
            imgUrl: '/sound_therapy.png',
            title: 'Sound Therapy',
        }
    ];

    return (
        <div>
            <p>Our Healing Techniques</p>
            <p>Elevating happiness with powerful healing tools for mind, body, and soul.</p>

            <div className="healing-techniques-grid">
                {healingTechniques.map((technique, index) => (
                    <HealingTechniqueCard key={index} {...technique} />
                ))}
            </div>
        </div>
    );
};

const HealingTechniqueCard = ({ imgUrl, title }) => {
    return (
        <div className="healing-technique-card">
            <div>
                <Image src={imgUrl} width={150} height={150} alt={title} />
            </div>
            <h3>{title}</h3>

        </div>
    );
};

export default HealingTechniquesComponent;
