import { type SqlServerDataSourceOptions } from 'typeorm/driver/sqlserver/SqlServerDataSourceOptions.js';

import { ORMConfigStore, type ORMConfigStoreSharedConfiguration } from '@configu/database';

export type MsSQLConfigStoreConfiguration = Omit<SqlServerDataSourceOptions, 'type'> &
  ORMConfigStoreSharedConfiguration;

export class MSSQLConfigStore extends ORMConfigStore {
  constructor(configuration: MsSQLConfigStoreConfiguration) {
    super({ ...configuration, type: 'mssql' });
  }
}
