import { type BetterSqlite3DataSourceOptions } from 'typeorm/driver/better-sqlite3/BetterSqlite3DataSourceOptions.js';
import { ORMConfigStore, type ORMConfigStoreSharedConfiguration } from '@jr200-labs/database';

export type SQLiteConfigStoreConfiguration = Omit<BetterSqlite3DataSourceOptions, 'type'> &
  ORMConfigStoreSharedConfiguration;

export class SQLiteConfigStore extends ORMConfigStore {
  constructor(configuration: SQLiteConfigStoreConfiguration) {
    super({ ...configuration, type: 'better-sqlite3' });
  }
}
