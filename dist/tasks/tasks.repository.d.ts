import { DataSource, Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { User } from 'src/auth/user.entity';
export declare class TaskRepository extends Repository<Task> {
    private dataSource;
    constructor(dataSource: DataSource);
    getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
}
