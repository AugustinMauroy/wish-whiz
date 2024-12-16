import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../**/*.stories.tsx'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-themes',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	logLevel: 'error',
	// enable if needed
	// staticDirs: ['../public'],
	typescript: { reactDocgen: false, check: false },
	core: { disableTelemetry: true, disableWhatsNewNotifications: true },
	framework: {
		name: '@storybook/nextjs',
		options: { builder: { useSWC: true } },
	},
	previewBody: `<style>:root { color-scheme: light; } html[data-theme="dark"] { color-scheme: dark; }
      #storybook-root { height: 100vh; width: 100vw; }
      body {
        @apply min-h-screen
        bg-white
        text-gray-950
        dark:bg-gray-950
        dark:text-gray-50;
      }
    </style>`,
};
export default config;
