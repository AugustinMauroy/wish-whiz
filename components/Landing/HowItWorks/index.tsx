import { CardContainer, CardTitle } from '~/components/Common/Card';
import styles from './index.module.css';
import type { FC, PropsWithChildren } from 'react';

const STEPS = [
	{
		title: 'Create an Account',
		description: 'Sign up for free to start creating your wishlists.',
	},
	{
		title: 'Add Items',
		description: 'Add all the items you desire to your lists.',
	},
	{
		title: 'Share',
		description:
			'Share your lists with friends and family via a unique link.',
	},
	{
		title: 'Track',
		description:
			'Mark items as purchased or reserved and receive notifications.',
	},
];

const Task: FC<PropsWithChildren> = ({ children }) => (
	<span className={styles.number}>{children}</span>
);

const HowItsWorks: FC = () => (
	<section id="how-it-works" className={styles.howItWorks}>
		<h2>How It Works</h2>
		<div className={styles.steps}>
			{STEPS.map((step, index) => (
				<CardContainer key={`step-${index + Math.random()}`}>
					<CardTitle
						title={
							<>
								<Task>{index + 1}</Task> {step.title}
							</>
						}
						as="h3"
					/>
					<p>{step.description}</p>
				</CardContainer>
			))}
		</div>
	</section>
);

export default HowItsWorks;
