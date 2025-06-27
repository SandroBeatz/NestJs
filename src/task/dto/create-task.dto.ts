import {IsNotEmpty, IsInt, IsOptional, IsPositive, IsString, Length, IsArray, IsEnum} from "class-validator";

enum TaskTag {
    WORK   = 'work',
    HOME   = 'home',
}

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @Length(2, 200)
    title: string

    @IsString()
    @IsOptional()
    description: string

    @IsInt()
    @IsPositive()
    @IsOptional()
    priority: number

    @IsArray()
    @IsEnum(TaskTag, {each: true})
    @IsOptional()
    tags: TaskTag[]
}
