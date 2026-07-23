import { type MysqlDataSourceOptions } from 'typeorm/driver/mysql/MysqlDataSourceOptions.js';
import { ORMConfigStore, type ORMConfigStoreSharedConfiguration } from '@configu/database';

// * TypeORM uses the mysql driver under the hood for MariaDB
export type MariaDBConfigStoreConfiguration = Omit<MysqlDataSourceOptions, 'type'> & ORMConfigStoreSharedConfiguration;

export class MariaDBConfigStore extends ORMConfigStore {
  constructor(configuration: Omit<MysqlDataSourceOptions, 'type'>) {
    super({ ...configuration, type: 'mariadb' });
  }
}
