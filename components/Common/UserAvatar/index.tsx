'use client';
import { useSession } from 'next-auth/react';
import Avatar from '../Avatar/index.tsx';
import { getAcronymFromString } from '~/utils/string.ts';
import type { FC } from 'react';

const UserAvatar: FC = () => {
	const session = useSession();

	// ensure that compoennt is only rendered when user is authenticated
	if (session.status !== 'authenticated') return null;

	return (
		<Avatar
			src={session.data.user?.image ?? ''}
			alt={getAcronymFromString(session.data.user?.name ?? '')}
		/>
	);
};

export default UserAvatar;
