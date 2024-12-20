import { auth } from '~/lib/auth';
import Landing from '~/components/Landing/index.tsx';
import Header from '~/components/Sections/Header/index.tsx';
import UserAvatar from '~/components/Common/UserAvatar/index.tsx';
import type { FC } from 'react';

const Page: FC = async () => {
	const session = await auth();

	if (!session)
		return (
			<>
				<Header
					actions={[
						{
							label: 'Features',
							href: '#features',
						},
						{
							label: 'How it works',
							href: '#how-it-works',
						},
						<UserAvatar key="avatar" />,
					]}
				/>
				<Landing />
			</>
		);

	return (
		<>
			<pre>{JSON.stringify(session, null, 2)}</pre>
			<Header actions={[<UserAvatar key="avatar" />]} />
		</>
	);
};

export default Page;
