import { Nav } from "@/src/components/nav";
import { Footer } from "@/src/components/footer";
import { ConcernDetailPageContent } from "@/src/components/legacy-static-pages";

export default function ConcernDetailPage() {
  return (
    <>
      <Nav />
      <ConcernDetailPageContent />
      <Footer />
    </>
  );
}
