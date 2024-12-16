export const GET = (): Response =>
	Response.json(
		{ message: 'Augustin need a tea' },
		{
			status: 418,
		}
	);
