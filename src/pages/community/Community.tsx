import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Channels from "./components/Channels";
import CommunityGuidelines from "./components/CommunityGuidelines";
import BottomCTA from "./components/BottomCTA";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const Community = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <LoadingSpinner fullPage />;
  return (
  <>
    <HeroSection />
    <Channels/>
    <CommunityGuidelines/>
    <BottomCTA/>
  </>
  );
};

export default Community;
