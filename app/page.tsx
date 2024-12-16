'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import type { FC } from 'react';

const Page: FC = () => {
	const session = useSession();

	return (
		<>
			<pre>{JSON.stringify(session, null, 2)}</pre>
			{session.status === 'authenticated' ? (
				<button onClick={() => signOut()}>Sign Out</button>
			) : (
				<button onClick={() => signIn()}>Sign In</button>
			)}
		</>
	);
};

export default Page;
