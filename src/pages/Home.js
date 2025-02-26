import WhoWeAre from '../components/Landing/WhoWeAre';
import ServicesSection from '../components/Landing/ServicesSection';
import BenefitsSection from '../components/Landing/BenefitsSection';

export default function Home() {
  return (
    <div>
      <WhoWeAre />
      <ServicesSection />
      <BenefitsSection />
    </div>
  );
}