import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Todo } from './entity/todo';
import { v4 as uuid } from 'uuid';
import { TodoStatusEnum } from 'src/todo-module/TodoStatusEnum';
import { AddTodoTdo } from './DTO/addTodo.Dto';
import { UpdateTodoDto } from './DTO/updateTodo.dto';
import { TodoModuleService } from './todo-module.service';
@Controller('todo')
export class TodoModuleController {
  constructor(private TodoModuleService: TodoModuleService) {}

  @Get('all')
  getTodos() {
    return this.TodoModuleService.getTodos();
  }
  @Post('add')
  addTodo(@Body() addedtodo: AddTodoTdo) {
    console.log(addedtodo.description);
    console.log(addedtodo.name);
    return this.TodoModuleService.addTodo(addedtodo);
  }

  @Get('get/:id')
  getbyId(@Param('id') id) {
    console.log(id);
    return this.TodoModuleService.getById(id);
  }

  @Delete('delete/:id')
  deleteTodo(@Param('id') id) {
    return this.TodoModuleService.deleteTodo(id);
  }
  @Patch('update/:id')
  updateTdo(@Param('id') id, @Body() updatedTodo: UpdateTodoDto) {
    return this.TodoModuleService.updateTodo(id, updatedTodo);
  }
}
