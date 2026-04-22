import "../../src/styles/news.css";
import "../../src/styles/blog.css";
import { BodyClass } from "@/src/components/body-class";

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BodyClass className="blog-page" />
      {children}
    </>
  );
}

