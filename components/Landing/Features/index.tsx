import {
	Gift,
	Share2,
	Bell,
	Smartphone,
	Palette,
	MessageCircle,
} from 'lucide-react';
import { CardContainer, CardTitle } from '~/components/Common/Card';
import styles from './index.module.css';
import type { FC } from 'react';

const FEATURES = [
	{
		icon: <Gift />,
		title: 'Multiple Wishlists',
		description: 'Multiple Wishlists',
	},
	{
		icon: <Share2 />,
		title: 'Easy Sharing',
		description:
			'Share your wishlists via unique links with privacy options.',
	},
	{
		icon: <Bell />,
		title: 'Item Tracking',
		description:
			'Mark items as purchased or reserved and receive notifications.',
	},
	{
		icon: <Smartphone />,
		title: 'Mobile Friendly',
		description: 'Use WishWhiz easily on your smartphones and tablets.',
	},
	{
		icon: <Palette />,
		title: 'Personalization',
		description: 'Customize your lists with themes and colors.',
	},
	{
		icon: <MessageCircle />,
		title: 'Personal Messages',
		description: 'Add personal notes for your recipients.',
	},
];

const Features: FC = () => (
	<section id="features" className={styles.features}>
		<h2>Features</h2>
		<div>
			{FEATURES.map(({ title, description }) => (
				<CardContainer key={title}>
					<CardTitle title={title} as="h3" />
					<p>{description}</p>
				</CardContainer>
			))}
		</div>
	</section>
);

export default Features;
