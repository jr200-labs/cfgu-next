import { type CockroachDataSourceOptions } from 'typeorm/driver/cockroachdb/CockroachDataSourceOptions.js';
import { ORMConfigStore, type ORMConfigStoreSharedConfiguration } from '@jr200-labs/database';

export type CockroachDBConfigStoreConfiguration = Omit<CockroachDataSourceOptions, 'type'> &
  ORMConfigStoreSharedConfiguration;

export class CockroachDBConfigStore extends ORMConfigStore {
  constructor(configuration: Omit<CockroachDataSourceOptions, 'type'>) {
    super({ ...configuration, type: 'cockroachdb' });
  }
}
