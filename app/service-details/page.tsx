import { Nav } from "@/src/components/nav";
import { Footer } from "@/src/components/footer";
import { ServiceDetailsPageContent } from "@/src/components/service-details-page-content";

export default function ServiceDetailsPage() {
  return (
    <>
      <Nav />
      <ServiceDetailsPageContent />
      <Footer />
    </>
  );
}
