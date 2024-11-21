import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    getTaskByid(id: string): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
