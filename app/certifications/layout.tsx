import "../../src/styles/news.css";
import "../../src/styles/blog.css";
import "../../src/styles/certifications.css";
import { BodyClass } from "@/src/components/body-class";

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BodyClass className="certifications-page" />
      {children}
    </>
  );
}

