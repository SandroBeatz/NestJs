import {IsNotEmpty, IsInt, IsString, Min, Max} from "class-validator";


export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    @IsInt()
    @Min(1988)
    @Max(new Date().getFullYear())
    releaseYear: number;
}
