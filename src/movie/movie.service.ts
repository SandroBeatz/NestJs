import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {MovieEntity} from "./entities/movie.entity";
import {Repository} from "typeorm";
import {CreateMovieDto} from "./dto/create-movie.dto";

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(MovieEntity)
        private readonly moviesRepository: Repository<MovieEntity>,
    ) {}

    async findAll(): Promise<MovieEntity[]> {
        return await this.moviesRepository.find({
            where: {
                isPublic: false,
            },
            order: {
                createdAt: 'desc',
            },
        });
    }

    async create(dto: CreateMovieDto): Promise<MovieEntity> {
        const movie = this.moviesRepository.create(dto);
        return await this.moviesRepository.save(movie);
    }
}
