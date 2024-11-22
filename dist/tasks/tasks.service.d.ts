import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { User } from 'src/auth/user.entity';
export declare class TasksService {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]>;
    getTaskByid(id: string, user: User): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    deleteTask(id: string, user: User): Promise<void>;
    updateTaskStatus(id: string, status: TaskStatus, user: User): Promise<Task>;
}
