import { CategoriesEnum } from "./CategoriesEnum";
import CommentInterface from "./CommentInterface";

export default interface ProductInterface {
  id: number;
  title: string;
  category: CategoriesEnum;
  upvotes: number;
  status: "suggestion" | "planned" | "live";
  description: string;
  comments: CommentInterface[];
}
