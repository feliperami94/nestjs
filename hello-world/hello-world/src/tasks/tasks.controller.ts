import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateTaskDTO } from "./dto/create-task.dto"
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {

    }

    @Get()
    getTasks(): Promise<Task[]> {
      return this.taskService.getTasks();
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId: string): Promise<Task> {
      return this.taskService.getTask(taskId);
    }

    @Post()
    createTask(@Body() task: CreateTaskDTO): Promise<Task> {
        return this.taskService.createTask(task);
    }
    
    @Delete(':id')
    deleteTask(@Param('id') id ): string {
        console.log({id})
        return `Deleting task number: ${id}`
    }

    @Put(':id')
    updateTask(@Body() task:CreateTaskDTO, @Param('id') id): string {
        console.log(task),
        console.log(id)
        return 'Updating a task'
    }



}
