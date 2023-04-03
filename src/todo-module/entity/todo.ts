import { TodoStatusEnum } from 'src/todo-module/TodoStatusEnum';

export class Todo {
  id: string;
  name: String;
  description: String;
  dateDeCreation: Date;
  statut: TodoStatusEnum;
}
