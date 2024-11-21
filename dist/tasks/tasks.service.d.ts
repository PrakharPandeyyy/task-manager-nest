import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTaskByid(id: string): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
