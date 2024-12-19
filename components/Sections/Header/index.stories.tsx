import Header from './index.tsx';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Header>;
type Meta = MetaObj<typeof Header>;

export const Default: Story = {
	args: {
		actions: [
			{
				href: '#feature',
				label: 'Feature',
			},
			{
				href: 'how-it-works',
				label: 'How it works',
			},
		],
	},
};

export default { component: Header } as Meta;
