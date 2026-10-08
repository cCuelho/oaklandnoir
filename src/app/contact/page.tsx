import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Contact M. A. Warren — reader inquiries and media requests.",
  "/contact",
);

export default function ContactPage() {
  return (
    <Container className="py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Contact"
          description={siteConfig.contact.publicNotice}
        />
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
