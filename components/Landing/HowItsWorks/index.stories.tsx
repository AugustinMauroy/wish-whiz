import HowItsWorks from './index.tsx';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof HowItsWorks>;
type Meta = MetaObj<typeof HowItsWorks>;

export const Default: Story = {};

export default { component: HowItsWorks } as Meta;
