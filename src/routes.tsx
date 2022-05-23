import React from 'react';
import { IconElementStroked } from '@douyinfe/semi-icons';

export const defaultRoute = 'dashboard/workplace';

export const routes = [
    {
        name: '仪表盘',
        key: 'dashboard',
        icon: <IconElementStroked />,
        children: [
            {
                index: true,
                name: '工作台',
                key: 'dashboard/workplace',
                componentPath: 'workplace',
            },
        ],
    },
];
