import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {join} from 'path';

export interface Configuration {
    database: TypeOrmModuleOptions;
    app_port: number;
    app_host: string;
}

export default () =>
    <Configuration>{
        database: {
            type: 'postgres',
            host: process.env.DATABASE_HOST || 'localhost',
            port: Number(process.env.DATABASE_PORT) || 5432,
            username: process.env.DATABASE_USER || 'postgres',
            password: process.env.DATABASE_PASSWORD || 'password',
            database: process.env.DATABASE_DB || 'shortener',
            entities: [join(__dirname, '../**', '*.entity{.ts,.js}')],
            migrationsRun: false,
            migrations: ['dist/db/migrations/**/*.js'],
            cli: {
                migrationsDir: 'db/migrations',
            },
            synchronize: true,
        },
        app_port: parseInt(process.env.APP_PORT, 10) || 3000,
        app_host: process.env.APP_HOST || 'http://localhost',
    };
