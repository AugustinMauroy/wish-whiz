import { setGlobalDispatcher, ProxyAgent } from 'undici';
import { env } from 'node:process';
import type { NextConfig } from 'next';

/**
 * This hacky way to set the global dispatcher for undici
 * so if the app is running behind a proxy, it will use the proxy
 */
if (env.https_proxy) {
	const dispatcher = new ProxyAgent({
		uri: new URL(env.https_proxy).toString(),
	});
	setGlobalDispatcher(dispatcher);
}

export default {
	// need to be test on CI but not on building of the app
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ['localhost'],
	},
} as NextConfig;
