import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { SessionProvider } from 'next-auth/react';
import type { Preview, ReactRenderer } from '@storybook/react';
import type { Session } from 'next-auth';
import '../styles/globals.css';

const mockSession: Session = {
	expires: '2023-01-01T00:00:00Z',
	user: {
		name: 'AugustinMauroy',
		email: 'augustin.mauroy@mail.com',
		image: 'https://avatars.githubusercontent.com/augustinmauroy',
	},
};

const preview: Preview = {
	parameters: {
		backgrounds: { disable: true },
		actions: { argTypesRegex: '^on[A-Z].*' },
		nextjs: {
			appDirectory: true,
		},
	},
	decorators: [
		withThemeByDataAttribute<ReactRenderer>({
			themes: {
				light: '',
				dark: 'dark',
			},
			defaultTheme: 'light',
			attributeName: 'data-theme',
		}),
		Story => (
			<SessionProvider session={mockSession}>
				<Story />
			</SessionProvider>
		),
	],
};

export default preview;
