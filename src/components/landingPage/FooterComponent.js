import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const FooterLinkSection = ({ title, links }) => (
  <div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="text-gray-600 hover:text-black cursor-pointer mb-1">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Socials */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Zariyaa™</h1>
          <p className="text-sm mb-4">The Way to Happiness</p>
          <div className="flex gap-4">
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>

        {/* Links Sections */}
        <FooterLinkSection
          title=""
          links={["Home", "Our programs", "Testimonials", "Why Zariyaa", "Latest from Zariyaa"]}
        />
        <FooterLinkSection
          title=""
          links={["Wellness Festivals", "Zen Spaces", "Employee Happiness Program", "Self Experiential Program", "Wellness Retreats"]}
        />
        <FooterLinkSection
          title=""
          links={["FAQs", "About Us", "Our Team", "Join us (carriers)"]}
        />

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold mb-2">Contacts us</h3>
          <p>📧 happy@zariyaa.in</p>
          <p>📞 +91 99165 86161</p>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center mt-8 border-t pt-4">
        <p>Copyright © {currentYear} Zariyaa</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
