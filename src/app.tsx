import React, { useMemo } from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider,
} from 'react-router-dom';
import PageLayout from './layout/layout';
import LazyLoad from './utils/lazyload';
import { defaultRoute, routes } from './routes';

//  Generate routes
function getFlattenRoutes() {
    const res: any[] = [];

    function travel(_routes: any) {
        _routes.forEach((route: any) => {
            if (route.componentPath) {
                route.component = <LazyLoad component={route?.componentPath} />;
                res.push(route);
            } else if (route?.children?.length) {
                travel(route.children);
            }
        });
    }

    travel(routes);
    return res;
}

function Fallback() {
    return <p>Performing initial data load</p>;
}

function App() {
    const flattenRoutes = useMemo(() => getFlattenRoutes() || [], []);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<PageLayout />}>
                <Route index element={<Navigate to={`/${defaultRoute}`} replace />} />
                {flattenRoutes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            index={route?.index}
                            path={`/${route?.key}`}
                            element={route?.component}
                        />
                    );
                })}
            </Route>
        )
    );

    return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}

export default App;
