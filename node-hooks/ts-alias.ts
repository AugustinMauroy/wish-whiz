// @ts-ignore it's not backported to Node.js 22
import { registerHooks } from 'node:module';
import * as aliasHooks from '@nodejs-loaders/alias';

registerHooks(aliasHooks);
