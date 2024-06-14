import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AppRoutes } from '../app.routes';

export const redirectQueryParamsBasedStoryUrlsGuard = (activatedRoute: ActivatedRouteSnapshot): UrlTree => {
	const router = inject(Router);
	const appRoutes = AppRoutes;

	return router.createUrlTree([appRoutes.Story, activatedRoute.queryParams['slug']], {
		queryParams: {
			navigation: 'storylist',
			navigationSlug: activatedRoute.queryParams['list'],
		},
	});
};
