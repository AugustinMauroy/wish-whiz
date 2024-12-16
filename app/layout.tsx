import type { FC, PropsWithChildren } from 'react';
import AuthProvider from '~/providers/auth';
import '~/styles/globals.css';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<html lang="en">
		<body>
			<AuthProvider>{children}</AuthProvider>{' '}
		</body>
	</html>
);

export default RootLayout;
