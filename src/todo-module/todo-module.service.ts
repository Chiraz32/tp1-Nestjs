import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TodoStatusEnum } from 'src/todo-module/TodoStatusEnum';
import { AddTodoTdo } from './DTO/addTodo.Dto';
import { UpdateTodoDto } from './DTO/updateTodo.dto';
import { Todo } from './entity/todo';
// import { v4 as uuid } from 'uuid';

@Injectable()
export class TodoModuleService {
  @Inject('uuid') uuid;
  private todos: Todo[] = [];
  getTodos() {
    return this.todos;
  }
  getById(id: String) {
    const todo = this.todos.find((actualTodo) => actualTodo.id == id);
    if (todo) {
      return todo;
    } else throw new NotFoundException("le todo n'existe pas");
  }
  addTodo(addedtodo: AddTodoTdo): Todo {
    const newtodo = new Todo();
    const { name, description } = addedtodo;

    newtodo.dateDeCreation = new Date();
    newtodo.id = this.uuid;
    newtodo.name = name;
    newtodo.description = description;
    newtodo.statut = TodoStatusEnum.waiting;
    this.todos.push(newtodo);
    return newtodo;
  }

  deleteTodo(id: String) {
    const index = this.todos.findIndex((e) => e.id == id);
    if (index === -1) {
      throw new NotFoundException();
    } else this.todos.splice(index, 1);
    return 'number of affected row is : 1';
  }
  updateTodo(id: String, updatedTodo: UpdateTodoDto) {
    const todo = this.getById(id);
    const { name, description, statut } = updatedTodo;
    if (name) {
      todo.name = name;
    }
    if (description) {
      todo.description = description;
    }
    if (statut) {
      todo.statut = statut;
    }
  }
}
