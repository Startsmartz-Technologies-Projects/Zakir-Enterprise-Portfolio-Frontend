import "../../src/styles/lets_collaborate.css";
import { BodyClass } from "@/src/components/body-class";

export default function LetsCollaborateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BodyClass className="lc-page" />
      {children}
    </>
  );
}

