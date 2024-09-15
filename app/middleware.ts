import { authMiddleware } from '@descope/nextjs-sdk/server';

export default authMiddleware({
	// The Descope project ID to use for authentication
	// Defaults to process.env.DESCOPE_PROJECT_ID
	projectId: 'P2m44e62G1sqtVmNDQO2SxPyDTJj',

	// The URL to redirect to if the user is not authenticated
	// Defaults to process.env.SIGN_IN_ROUTE or '/sign-in' if not provided
	redirectUrl: '/sign-in',

	// An array of public routes that do not require authentication
	// In addition to the default public routes:
	publicRoutes: ['/about', '/help'],
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
