// TODO(AugustinMauroy): add stories
import styles from './index.module.css';
import type { FC, PropsWithChildren, ReactNode } from 'react';

type CardTitleProps = {
	title: ReactNode;
};

const CardTitle: FC<CardTitleProps> = ({ title }) => (
	<div className={styles.cardTitle}>{title}</div>
);

const CardDescription: FC<PropsWithChildren> = ({ children }) => (
	<div className={styles.cardDescription}>{children}</div>
);

const CardSeparator: FC = () => <div className={styles.cardSeparator} />;

const CardContainer: FC<PropsWithChildren> = ({ children }) => (
	<div className={styles.card}>{children}</div>
);

export default {
	CardTitle,
	CardSeparator,
	CardContainer,
	CardDescription,
};
