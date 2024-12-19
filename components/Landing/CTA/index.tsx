import Link from 'next/link';
import Button from '~/components/Common/Button';
import styles from './index.module.css';
import type { FC } from 'react';

const CallToAction: FC = () => (
	<section id="call-to-action" className={styles.callToAction}>
		<h2>Ready to Start Wishing?</h2>
		<p>
			Join WishWhiz today and start creating your perfect wishlists for
			any occasion.
		</p>
		<Button asChild variant="neutral" kind="outline">
			<Link href="/login">Get Started</Link>
		</Button>
	</section>
);

export default CallToAction;
