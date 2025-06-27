import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateTaskDto} from "./dto/create-task.dto";
import {UpdateTaskDto} from "./dto/update-task.dto";

@Injectable()
export class TaskService {
    private tasks = [
        {id: 1, title: 'Task 1'},
        {id: 2, title: 'Task 2'},
        {id: 3, title: 'Task 3'},
    ]

    getAll() {
        return this.tasks;
    }

    getOne(id: number) {
        const task = this.tasks.find((task) => task.id === id);

        if (!task) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }

        return task
    }

    create(dto: CreateTaskDto) {
        const {title, description, priority, tags} = dto
        const newTask = {
            id: this.tasks.length + 1,
            title,
            description,
            priority,
            tags
        }

        this.tasks.push(newTask)

        return newTask
    }

    update(id: number, dto: UpdateTaskDto) {
        const task = this.getOne(id)

        task.title = dto.title

        return task
    }

    patchUpdate(id: number, dto: Partial<UpdateTaskDto>) {
        const task = this.getOne(id)
        Object.assign(task, dto)

        return task
    }

    delete(id: number) {
        const task = this.getOne(id)
        this.tasks = this.tasks.filter(i => i.id !== task.id)

        return task
    }
}
