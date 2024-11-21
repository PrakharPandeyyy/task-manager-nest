"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const typeorm_1 = require("typeorm");
const task_entity_1 = require("./task.entity");
const task_status_enum_1 = require("./task-status.enum");
let TaskRepository = class TaskRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(task_entity_1.Task, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getTasks(filterDto) {
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('task');
        if (status) {
            query.andWhere('task.status=:status', { status });
        }
        if (search) {
            query.andWhere('LOWER(task.title) LIKE :search OR LOWER(task.description) LIKE LOWER(:search)', {
                search: `%${search}%`,
            });
        }
        const tasks = await query.getMany();
        return tasks;
    }
    async createTask(createTaskDto) {
        const { title, description } = createTaskDto;
        const task = this.create({
            title,
            description,
            status: task_status_enum_1.TaskStatus.OPEN,
        });
        await this.save(task);
        return task;
    }
};
exports.TaskRepository = TaskRepository;
exports.TaskRepository = TaskRepository = __decorate([
    (0, typeorm_1.EntityRepository)(task_entity_1.Task),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], TaskRepository);
//# sourceMappingURL=tasks.repository.js.map