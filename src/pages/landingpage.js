import FAQComponent from "@/components/landingPage/faqComponent";
import FooterComponent from "@/components/landingPage/FooterComponent";
import HeroSection from "@/components/landingPage/HeroComponent";
import LatestFromZariyaaComponent from "@/components/landingPage/latestFromZariyaaComponent";
import HealingTechniquesComponent from "@/components/landingPage/ourHealingTechniquesComponent";
import ZariyaaOfferingProgramsComponent from "@/components/landingPage/ProgrammesComponent";
import TestimonialsComponent from "@/components/landingPage/testimonialsComponent";
import WhyZariyaaComponent from "@/components/landingPage/WhyZariyaaComponent";
import ZariyaaStatsComponent from "@/components/landingPage/ZariyaaStatsComponent";



const LandingPage = () =>{

    return (<>
        <HeroSection />
        <ZariyaaOfferingProgramsComponent />
        <TestimonialsComponent />
        <HealingTechniquesComponent />
        <ZariyaaStatsComponent />
        <WhyZariyaaComponent />
        <LatestFromZariyaaComponent />
        <FAQComponent/>
        <FooterComponent />
        
    </>)
};

export default LandingPage;