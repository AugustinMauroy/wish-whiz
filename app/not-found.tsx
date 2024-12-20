import Link from 'next/link';
import { HomeIcon, SearchIcon } from 'lucide-react';
import Button from '~/components/Common/Button';
import styles from './not-found.module.css';
import type { FC } from 'react';

const NotFoundPage: FC = () => (
	<main className={styles.notFound}>
		<SearchIcon className={styles.icon} />
		<h1>404 - Page Not Found</h1>
		<p>
			Oops! It looks like this wish got lost in the whirlwind.
			<br />
			Don't worry, there are plenty more wishes to discover. Let's get you
			back on track!
		</p>
		<Button asChild>
			<Link href="/">
				<HomeIcon />
				Return to Home
			</Link>
		</Button>
	</main>
);

export default NotFoundPage;
