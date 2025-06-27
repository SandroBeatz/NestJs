import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import { TaskService } from './task.service';
import {CreateTaskDto} from "./dto/create-task.dto";
import {UpdateTaskDto} from "./dto/update-task.dto";

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAll() {
    return this.taskService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.taskService.getOne(+id);
  }

  @Post('create')
  create(@Body() dto: CreateTaskDto) {
    return this.taskService.create(dto);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.update(+id, dto);
  }

  @Patch('patch/:id')
  patchUpdate(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.patchUpdate(+id, dto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(+id);
  }
}
