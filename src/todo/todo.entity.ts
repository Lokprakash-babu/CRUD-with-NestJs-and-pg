import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('todo')
export class TodoEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('text') task: string;

  @Column('text') description: string;
}
