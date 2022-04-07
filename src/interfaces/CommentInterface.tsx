import UserInterface from "./UserInterface";

export default interface CommentInterface {
  user: UserInterface;
  _id: string;
  id: number;
  content: string;
}
