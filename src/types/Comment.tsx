import UserInterface from "./User"
export default interface CommentInterface {
  id: number;
  content: string;
  user: UserInterface;
}
