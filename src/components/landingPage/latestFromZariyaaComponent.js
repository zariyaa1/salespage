const LatestFromZariyaaComponent = () => {
    const events = [
        {
            city: "HCL 8 city",
            type: "wellness festival",
            Title: "India’s First 8-City Festival Tour for HCL",
            resourceURL: "/wellnessretreats.png"
        },
        {
            city: "HCL 8 city",
            type: "wellness festival",
            Title: "A DEI Carnival Like Never Before for JP Morgan",
            resourceURL: "/wellnessretreats.png"
        },
        {
            city: "HCL 8 city",
            type: "wellness festival",
            Title: "India’s First 8-City Festival Tour for HCL",
            resourceURL: "/wellnessretreats.png"
        }
    ];

    return (
        <div className="bg-[#1a1a3d] p-8 text-center">
            <h2 className="text-white text-3xl font-bold mb-4">
                Latest from Zariyaa <span role="img" aria-label="starstruck">🤩</span>
            </h2>
            <div className="flex justify-center gap-4">
                {events.map((event, index) => (
                    <AnimatedCard key={index} {...event} />
                ))}
            </div>
        </div>
    );
};

const AnimatedCard = ({ city, type, Title, resourceURL }) => {
    return (
        <div
            className="relative w-80 h-60 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            style={{ backgroundImage: `url(${resourceURL})`, backgroundSize: "cover" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <p className="text-sm text-gray-300">
                    {city} - {type}
                </p>
                <h3 className="text-white text-lg font-semibold">{Title}</h3>
                <button className="mt-2 bg-white text-black px-4 py-1 text-sm rounded-full hover:bg-gray-200">
                    View Details ➜
                </button>
            </div>
        </div>
    );
};

export default LatestFromZariyaaComponent;
