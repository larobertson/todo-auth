// this is one of the contexts in our App (it's a way of global state management)
export type UserAuth = {
  id: number;
  email: string;
};

export type ToDoItemType = { id: string; toDo?: string; complete?: boolean };
export enum ActionType {
  add = "ADD",
  delete = "DELETE",
  updateStatus = "UPDATE"
}