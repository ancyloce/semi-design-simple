import React, { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './layout/layout';
import './App.css';
import LazyLoad from './utils/lazyload';
import { routes } from './routes';

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

function App() {
    const flattenRoutes = useMemo(() => getFlattenRoutes() || [], []);

    return (
        <Routes>
            <Route path="/" element={<PageLayout />}>
                {flattenRoutes.map((route, index) => {
                    return <Route key={index} path={`/${route.key}`} element={route.component} />;
                })}
            </Route>
        </Routes>
    );
}

export default App;
