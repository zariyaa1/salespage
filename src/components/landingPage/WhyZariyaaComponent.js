const WhyZariyaaComponent = () => {
    const cards = [
        { logo: '🔽', description: 'Science meets ancient wisdom' },
        { logo: '🔽', description: 'Root cause based approach' },
        { logo: '🔽', description: 'Delivering with love and care.' },
        { logo: '🔽', description: 'Building Joyful connections' },
        { logo: '🔽', description: 'Revolutionising wellness and happiness' },
        { logo: '🔽', description: 'Heart work with Hard work' }
    ];

    return (
        <div className="why-zariyaa-container">
            <h3 className="heading"><span className="highlight">Why Zariyaa?</span></h3>
            <p className="subtext">Not just a company, but a movement of happiness</p>
            
            <div className="cards-container">
                {cards.map((card, index) => (
                    <AnimatedCard key={index} logo={card.logo} description={card.description} />
                ))}
            </div>
        </div>
    );
};

const AnimatedCard = ({ logo, description }) => {
    return (
        <div className="animated-card">
            <div className="logo">{logo}</div>
            <p className="description">{description}</p>
        </div>
    );
};

export default WhyZariyaaComponent;