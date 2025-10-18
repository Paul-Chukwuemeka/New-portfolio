"use client";
import Skills from "@/components/features/skills/Skills";
import PageWrapper from "@/components/PageLayout";

export default function Home() {
  return (
    <div className="flex max-lg:flex-col">
      <PageWrapper>
        <Skills />
      </PageWrapper>
    </div>
  );
}
