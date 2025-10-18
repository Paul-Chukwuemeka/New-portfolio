"use client";
import Contact from "@/components/features/contact/Contact";
import PageWrapper from "@/components/PageLayout";

export default function Home() {
  return (
    <div className={`flex max-lg:flex-col h-fit min-h-screen `}>
      <PageWrapper>
        <Contact />
      </PageWrapper>
    </div>
  );
}
