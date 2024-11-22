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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tasks_repository_1 = require("./tasks.repository");
let TasksService = class TasksService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    getTasks(filterDto, user) {
        return this.taskRepository.getTasks(filterDto, user);
    }
    async getTaskByid(id, user) {
        try {
            const task = await this.taskRepository.findOne({ where: { id, user } });
            return task;
        }
        catch (e) {
            throw new common_1.NotFoundException('Task Does not exist');
        }
    }
    createTask(createTaskDto, user) {
        return this.taskRepository.createTask(createTaskDto, user);
    }
    async deleteTask(id) {
        const result = await this.taskRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Task with ID "${id}" not found`);
        }
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tasks_repository_1.TaskRepository)),
    __metadata("design:paramtypes", [tasks_repository_1.TaskRepository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map