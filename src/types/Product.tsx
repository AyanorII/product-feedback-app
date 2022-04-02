import CommentInterface from "./Comment";
export default interface ProductInterface {
  title: string;
  category: "feature" | "ui" | "ux" | "bug" | "enhancement";
  upvotes: number;
  status: "suggestion" | "planned" | "in-progress" | "live";
  description: string;
  comments: CommentInterface[];
}
