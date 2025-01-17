'use client';
import { LogInIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Button from '~/components/Common/Button';
import type { FC } from 'react';

const SIGNIN_OPTIONS = ['github'];

const Page: FC = () => {
	const searchParams = useSearchParams();
	const redirectTo = searchParams.get('redirectTo') ?? '/';

	return (
		<main className="flex h-screen flex-col items-center justify-center">
			<form className='flex min-w-96 flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-lg dark:border dark:border-gray-700 dark:bg-gray-800'>
				<h1 className='text-center font-bold text-2xl dark:text-white'>
					Sign in to your account
				</h1>
				<p className="text-center text-gray-600 dark:text-gray-200">
					Sign in to access your account and continue your journey.
				</p>
				{SIGNIN_OPTIONS.map(provider => (
					<Button
						key={provider}
						onClick={() => signIn(provider, { redirectTo })}
					>
						<LogInIcon />
						Sign in with {provider}
					</Button>
				))}
			</form>
		</main>
	);
};

export default Page;
