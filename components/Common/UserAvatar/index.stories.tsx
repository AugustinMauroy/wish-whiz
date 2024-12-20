import UserAvatar from './index.tsx';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof UserAvatar>;
type Meta = MetaObj<typeof UserAvatar>;

export const Default: Story = {};

export default { component: UserAvatar } as Meta;
