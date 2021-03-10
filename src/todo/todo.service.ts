import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoDTO } from './todo.dto';
import { TodoEntity } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  async showAllList() {
    return this.todoRepository.find();
  }

  async create(data: TodoDTO) {
    const to = await this.todoRepository.create(data);
    await this.todoRepository.save(to);
    return to;
  }

  async read(id: string) {
    return await this.todoRepository.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<TodoDTO>) {
    await this.todoRepository.update({ id }, data);
    return await this.todoRepository.findOne({ where: { id } });
  }

  async destroy(id: string) {
    await this.todoRepository.delete({ id });
    return { deleted: true };
  }
}
