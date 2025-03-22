import Image from "next/image";

const TestimonialsComponent = () => {
    const testimonials = [
        {
            svg: '/dummyCompany.svg',
            ratingCount: 5,
            title: 'Amazing Experience!',
            description: 'The sessions were insightful and engaging.',
            videoUrl: 'https://example.com/testimonial1.mp4',
            user: { imgUrl: '/profile1.png', name: 'John Doe', role: 'Software Engineer' }
        },
        {
            svg: '/dummyCompany.svg',
            ratingCount: 4,
            title: 'Learned a lot!',
            description: 'Really helped me improve my skills.',
            user: { imgUrl: '/profile2.png', name: 'Jane Smith', role: 'Product Manager' }
        }
    ];

    return (
        <div>
            <div><p>People love us 🫶</p></div>
            <div><p>98% Positive Feedback 💜</p></div>
            <div><p>from 20 Lakh+ people who attended our program</p></div>

            <FilterComponent />

            <div>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

const TestimonialCard = ({ svg, ratingCount, title, description, videoUrl = null, user }) => {
    return (
        <div className="testimonial-card">
            <div>{svg && <Image width={100} height={100} src={svg} alt="rating" />}</div>
            <div>{'⭐'.repeat(ratingCount)}</div>
            <div><h3>{title}</h3></div>
            <div><p>{description}</p></div>
            {videoUrl && <div><video src={videoUrl} controls width="100%" /></div>}
            <UserProfile {...user} />
        </div>
    );
};

const FilterComponent = () => {
    return (
        <div>
            <button>HR Testimonials</button>
            <button>Employee Testimonials</button>
        </div>
    );
};

const UserProfile = ({ imgUrl, name, role }) => {
    return (
        <div className="user-profile">
            <div><Image src={imgUrl} width={100} height={100} alt={name} /></div>
            <div><p>{name}</p></div>
            <div><p>{role}</p></div>
        </div>
    );
};

export default TestimonialsComponent;