import Link from 'next/link';
import Button from '~/components/Common/Button';
import styles from './index.module.css';
import type { FC } from 'react';

const Hero: FC = () => (
	<section className={styles.hero} id="hero">
		<h1>Create and Share Your Ultimate Wishlists</h1>
		<p>
			WishWhiz makes it easy to list all the gifts you desire and share
			them with your loved ones for any occasion.
		</p>
		<Button asChild>
			<Link href="/login">Get Started</Link>
		</Button>
	</section>
);

export default Hero;
