import { Nav } from "@/src/components/nav";
import { Footer } from "@/src/components/footer";
import { NewsDetailPageContent } from "@/src/components/news-page-content";

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <Nav />
      <NewsDetailPageContent itemId={id} />
      <Footer />
    </>
  );
}
