import {ConfigService} from "@nestjs/config";
import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export async function getTypeOrmConfig(configService: ConfigService): Promise<TypeOrmModuleOptions> {
  return {
      type: 'postgres',
      host: 'localhost',
      port: configService.getOrThrow('POSTGRES_PORT'),
      username: configService.getOrThrow('POSTGRES_USER'),
      password: configService.getOrThrow('POSTGRES_PASSWORD'),
      database: configService.getOrThrow('POSTGRES_DB'),
      autoLoadEntities: true,
      synchronize: true, // Note: set to false in production
  };
}
