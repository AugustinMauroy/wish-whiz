import Button from './index.tsx';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;
type Meta = MetaObj<typeof Button>;

export const PrimarySolid: Story = {
	args: { children: 'Primary Solid', kind: 'solid', variant: 'primary' },
};

export const PrimaryOutline: Story = {
	args: { children: 'Primary Outline', kind: 'outline', variant: 'primary' },
};

export const NeutralSolid: Story = {
	args: { children: 'Neutral Solid', kind: 'solid', variant: 'neutral' },
};

export const NeutralOutline: Story = {
	args: { children: 'Neutral Outline', kind: 'outline', variant: 'neutral' },
};

export default { component: Button } as Meta;
