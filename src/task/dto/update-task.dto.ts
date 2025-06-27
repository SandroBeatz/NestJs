import {IsNotEmpty, IsString, Length} from "class-validator";

export class UpdateTaskDto {
    @IsString({message: 'Task already exists'})
    @IsNotEmpty({message: 'Task already exists'})
    @Length(2, 200, {message: 'Task already exists'})
    title: string
}
