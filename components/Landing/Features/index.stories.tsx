import Features from './index.tsx';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Features>;
type Meta = MetaObj<typeof Features>;

export const Default: Story = {};

export default { component: Features } as Meta;
