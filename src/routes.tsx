import React from 'react';
import { IconElementStroked } from '@douyinfe/semi-icons';

export const routes = [
    {
        name: '仪表盘',
        key: 'dashboard',
        icon: <IconElementStroked />,
        children: [
            {
                name: '工作台',
                key: 'dashboard/workplace',
                componentPath: 'workplace',
            },
        ],
    },
];
