import { type MysqlDataSourceOptions } from 'typeorm/driver/mysql/MysqlDataSourceOptions.js';
import { ORMConfigStore, type ORMConfigStoreSharedConfiguration } from '@jr200-labs/database';

export type MySQLConfigStoreConfiguration = Omit<MysqlDataSourceOptions, 'type'> & ORMConfigStoreSharedConfiguration;

export class MySQLConfigStore extends ORMConfigStore {
  constructor(configuration: MySQLConfigStoreConfiguration) {
    super({ ...configuration, type: 'mysql' });
  }
}
