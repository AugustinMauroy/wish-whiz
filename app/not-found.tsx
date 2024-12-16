import Link from 'next/link';
import Button from '~/components/Common/Button';
import type { FC } from 'react';

const NotFoundPage: FC = () => (
	<main>
		{/* spy glass icon, lucide icon ? */}
		<h1>404 - Page Not Found</h1>
		<p>
			Oops! It looks like this wish got lost in the whirlwind.
			<p>
				Don't worry, there are plenty more wishes to discover. Let's get
				you back on track!
			</p>
			<Button asChild>
				<Link href="/">
					{/* Home icon, lucide icon ? */}
					Return to Home
				</Link>
			</Button>
		</p>
	</main>
);

export default NotFoundPage;
