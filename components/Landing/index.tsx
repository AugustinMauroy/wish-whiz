import Features from './Features/index.tsx';
import Hero from './Hero/index.tsx';
import HowItsWorks from './HowItsWorks/index.tsx';
import CallToAction from './CTA/index.tsx';
import type { FC } from 'react';

const Landing: FC = () => (
	<>
		<Hero />
		<Features />
		<HowItsWorks />
		<CallToAction />
	</>
);

export default Landing;
