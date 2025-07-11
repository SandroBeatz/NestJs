import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TaskModule} from './task/task.module';
import {MovieModule} from './movie/movie.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {getTypeOrmConfig} from "./config/typeorm.config";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: getTypeOrmConfig,
            inject: [ConfigService],
        }),
        TaskModule,
        MovieModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
