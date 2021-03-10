import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoDTO } from './todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getAllIdeas() {
    return this.todoService.showAllList();
  }

  @Post()
  createIdea(@Body() data: TodoDTO) {
    return this.todoService.create(data);
  }

  @Get(':id')
  getAnIdea(@Param('id') id: string) {
    return this.todoService.read(id);
  }

  @Put(':id')
  updateAnIdea(@Param('id') id: string, @Body() data: Partial<TodoDTO>) {
    return this.todoService.update(id, data);
  }

  @Delete(':id')
  deleteAnIdea(@Param('id') id: string) {
    return this.todoService.destroy(id);
  }
}
