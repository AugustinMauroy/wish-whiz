// TODO(AugustinMauroy): add stories
import styles from './index.module.css';
import type { FC, PropsWithChildren, ReactNode } from 'react';

type CardTitleProps = {
	title: ReactNode;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const CardTitle: FC<CardTitleProps> = ({ title, as = 'h2' }) => {
	const Tag = as;
	return <Tag className={styles.cardTitle}>{title}</Tag>;
};

export const CardDescription: FC<PropsWithChildren> = ({ children }) => (
	<div className={styles.cardDescription}>{children}</div>
);

export const CardSeparator: FC = () => <div className={styles.cardSeparator} />;

export const CardContainer: FC<PropsWithChildren> = ({ children }) => (
	<div className={styles.card}>{children}</div>
);

export default {
	CardTitle,
	CardSeparator,
	CardContainer,
	CardDescription,
};
