import { setGlobalDispatcher, ProxyAgent } from 'undici';
import { env } from 'node:process';
import type { NextConfig } from 'next';

/**
 * This hacky way to set the global dispatcher for undici
 * so if the app is running behind a proxy, it will use the proxy
 */
if (env.HTTP_PROXY || env.HTTPS_PROXY) {
	console.log('Setting up proxy agent in next.config.ts');
	const dispatcher = new ProxyAgent({
		// @ts-expect-error
		uri: env.HTTPS_PROXY ? new URL(env.HTTPS_PROXY).toString() : new URL(env.HTTP_PROXY).toString(),
	});
	setGlobalDispatcher(dispatcher);
}

export default {
	// need to be test on CI but not on building of the app
	typescript: {
		ignoreBuildErrors: true,
	},
	// We use biomeJS instead of old eslint
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ['localhost'],
	},
} as NextConfig;
