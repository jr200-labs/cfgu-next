import { type PostgresDataSourceOptions } from 'typeorm/driver/postgres/PostgresDataSourceOptions.js';
import { ORMConfigStore, type ORMConfigStoreSharedConfiguration } from '@configu/database';

export type PostgreSQLConfigStoreConfiguration = Omit<PostgresDataSourceOptions, 'type'> &
  ORMConfigStoreSharedConfiguration;

export class PostgreSQLConfigStore extends ORMConfigStore {
  constructor(configuration: Omit<PostgresDataSourceOptions, 'type'>) {
    super({ ...configuration, type: 'postgres' });
  }
}
