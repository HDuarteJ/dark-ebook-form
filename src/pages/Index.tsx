import { useState } from "react";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Hero onCtaClick={() => setIsFormOpen(true)} />
      <LeadForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default Index;
