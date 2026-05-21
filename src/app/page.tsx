import HeroSection from "@/components/sections/HeroSection";
import AboutLeader from "@/components/sections/AboutLeader";
import StatsSection from "@/components/sections/StatsSection";
import WorksPreview from "@/components/sections/WorksPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AnnouncementsPreview from "@/components/sections/AnnouncementsPreview";
import StoriesPreview from "@/components/sections/StoriesPreview";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutLeader />
      <StatsSection />
      <WorksPreview />
      <TestimonialsSection />
      <AnnouncementsPreview />
      <StoriesPreview />
      <ContactCTA />
    </>
  );
}
