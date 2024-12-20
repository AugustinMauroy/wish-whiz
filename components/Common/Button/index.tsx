import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './index.module.css';
import type { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	kind?: 'solid' | 'outline';
	variant?: 'primary' | 'neutral';
	asChild?: boolean;
};

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			kind = 'solid',
			variant = 'primary',
			className,
			asChild = false,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'button';

		return (
			<Comp
				ref={ref}
				className={classNames(
					styles.button,
					styles[kind],
					styles[variant],
					className,
				)}
				{...props}
			>
				{children}
			</Comp>
		);
	},
);

Button.displayName = 'Button';

export default Button;
