import { auth } from '~/lib/auth';
import type { FC } from 'react';
import Landing from '~/components/Landing';

const Page: FC = async () => {
	const session = await auth();

	if (!session) return <Landing />;

	return (
		<>
			<pre>{JSON.stringify(session, null, 2)}</pre>
		</>
	);
};

export default Page;
