/* Styles */
import './styles/navigation.scss';

/* Packages */
import { Fragment, Suspense } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';

/* Scripts */
import { NavigationComponentProps, NavigationListItemProps, NavigationRoutesProps } from './scripts/navigation-types';
import { navigationUtils } from './scripts/navigation-utils';
import { navigationRoutes } from './scripts/navigation-routes';

/* Components */
import { List } from '../blocks/Blocks';

/* Get navigation menu */
const navigationList = navigationUtils.get.list();

export const Navigation = (props: NavigationComponentProps) => {
	const { label } = props;
	const navigationLinkClass = 'navigation-link';

	return navigationList.length != 0 ? (
		<nav className="navigation" aria-label={label}>
			<List className="navigation-list" variant="ul-unstyled">
				{navigationList.map((nav) => {
					return (
						<Fragment key={nav.id}>
							<NavigationListItem navigationLinkClass={navigationLinkClass} nav={nav} />
						</Fragment>
					);
				})}
			</List>
		</nav>
	) : null;
};

export const NavigationListItem = (props: NavigationListItemProps) => {
	const { nav, navigationLinkClass } = props;
	const navigationActiveClass = `${navigationLinkClass} ${navigationLinkClass}-active`;

	return (
		<li className="navigation-list-item">
			<NavLink to={nav.url} className={({ isActive }) => (isActive ? navigationActiveClass : navigationLinkClass)}>
				{nav.label}
			</NavLink>
		</li>
	);
};

export const NavigationRoutes = () => {
	return navigationRoutes.length != 0 ? (
		<Suspense fallback={null}>
			<Routes>
				{navigationRoutes.map((nav: NavigationRoutesProps) => {
					const navProps = nav?.props ?? {};

					return (
						<Fragment key={nav.id}>
							{nav?.children && nav.children.length !== 0 ? (
								<>
									<Route path={`${nav.path}/*`} element={<nav.element {...navProps} />} />

									{nav.children.map((child: NavigationRoutesProps) => {
										const childProps = child?.props ?? {};
										return <Route path={child.path} element={<child.element {...childProps} />} key={child.id} />;
									})}
								</>
							) : (
								<Route path={nav.path} element={<nav.element {...navProps} />} />
							)}
						</Fragment>
					);
				})}

				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Suspense>
	) : null;
};
