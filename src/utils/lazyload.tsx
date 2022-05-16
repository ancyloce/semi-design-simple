import React, { Suspense } from 'react';
import { Spin } from '@douyinfe/semi-ui';

function LazyLoad(props: { component: any }) {
    const LazyComponent = React.lazy(() => {
        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve(
                        import(`../pages/${props.component}`).catch(() => {
                            return { default: () => <div>Not found</div> };
                        })
                    ),
                1000
            );
        });
    });

    return (
        <Suspense
            fallback={
                <div className="ax-router-spin">
                    <Spin />
                </div>
            }
        >
            <LazyComponent />
        </Suspense>
    );
}

export default LazyLoad;
