import { createRouter } from '@backstage/plugin-auth-backend';
import { PluginEnvironment } from '../types';

export default async function createPlugin({
  logger,
  database,
  config,
  discovery,
}: PluginEnvironment) {
  return await createRouter({ logger, config, database, discovery });
}
