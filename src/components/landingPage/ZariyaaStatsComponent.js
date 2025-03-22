const ZariyaaStatsComponent = () => {
    const stats = [
        {
            title: "Organizations Transformed",
            count: '100+'
        },
        {
            title: "People’s Lives Empowered",
            count: "100+"
        },
        {
            title: "Sessions Conducted",
            count: "100+"
        },
        {
            title: "Global Experts and Healers",
            count: "100+"
        }
    ];

    return (
        <div>
            <p>Zariyaa has come a long way</p>
            <div className="stats-container">
                {stats.map((stat, index) => (
                    <AnimatedStatsComponent key={index} {...stat} />
                ))}
            </div>
        </div>
    );
};

const AnimatedStatsComponent = ({ title, count }) => {
    return (
        <div className="stat-card">
            <h3>{count}</h3>
            <p>{title}</p>
        </div>
    );
};

export default ZariyaaStatsComponent;