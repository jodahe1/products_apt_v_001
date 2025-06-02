import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { Product } from './products/entities/product.entity';


const config: Options<PostgreSqlDriver> = {
  entities: [Product],
  dbName: 'Products',
  user: 'postgres',
  password: 'Admin',
  host: 'localhost',
  port: 5432,
  driver: PostgreSqlDriver,
  extensions: [Migrator],
  migrations: {
    path: './dist/migrations',
    pathTs: './src/migrations',
    glob: '!(*.d).{js,ts}',
    transactional: true,
    disableForeignKeys: true,
    allOrNothing: true,
    emit: 'ts',
  },
  debug: true,
};

export default config;
