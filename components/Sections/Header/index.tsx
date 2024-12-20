import { Fragment } from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import type { FC, ReactNode } from 'react';

type HeaderProps = {
	actions: Array<
		| ReactNode
		| {
				href: string;
				label: string;
		  }
	>;
};

const Header: FC<HeaderProps> = ({ actions }) => (
	<header className={styles.header}>
		<strong>WishWhiz</strong>
		<div className={styles.actions}>
			{actions.map((action, index) => {
				if (
					action &&
					typeof action === 'object' &&
					'href' in action &&
					'label' in action
				) {
					return (
						<Link
							key={`${index + Math.random()}`}
							href={action.href}
						>
							{action.label}
						</Link>
					);
				}
				return (
					<Fragment key={`${index + Math.random()}`}>
						{action}
					</Fragment>
				);
			})}
		</div>
	</header>
);

export default Header;
