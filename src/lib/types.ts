export type ProjectStatus = "Completed" | "Ongoing" | "Planning";

export interface Project {
  id: string;
  slug: string;
  category: string;
  type: string;
  status: ProjectStatus;
  location: string;
  title: string;
  year: string;
  duration: string;
  image: string;
  badge: string;
  badgeClass?: string;
  summary: string;
}
