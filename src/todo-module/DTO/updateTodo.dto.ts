import { TodoStatusEnum } from 'src/todo-module/TodoStatusEnum';

export class UpdateTodoDto {
  name: String;
  description: String;
  statut: TodoStatusEnum;
}
