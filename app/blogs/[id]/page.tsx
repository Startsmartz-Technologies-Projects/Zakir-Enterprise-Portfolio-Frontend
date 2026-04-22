import { Nav } from "@/src/components/nav";
import { Footer } from "@/src/components/footer";
import { BlogDetailPageContent } from "@/src/components/blog-detail-page-content";

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <Nav />
      <BlogDetailPageContent id={id} />
      <Footer />
    </>
  );
}
