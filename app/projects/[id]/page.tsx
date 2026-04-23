import { Nav } from "@/src/components/nav";
import { Footer } from "@/src/components/footer";
import { ProjectDetailContent } from "@/src/components/project-detail-content";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams =
    typeof (params as Promise<{ id: string }>)?.then === "function"
      ? await (params as Promise<{ id: string }>)
      : (params as { id: string });
  const projectId = decodeURIComponent(resolvedParams.id);

  return (
    <>
      <Nav />
      <ProjectDetailContent projectId={projectId} />
      <Footer />
    </>
  );
}
