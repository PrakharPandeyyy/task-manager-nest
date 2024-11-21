import { DataSource, Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TaskRepository extends Repository<Task> {
    private dataSource;
    constructor(dataSource: DataSource);
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
