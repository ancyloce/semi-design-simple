import React from 'react';
import { Breadcrumb, Layout } from '@douyinfe/semi-ui';
import { Outlet } from 'react-router-dom';
import Menu from './menu';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.scss';

const PageLayout = () => {
    const { Content } = Layout;

    return (
        <Layout>
            <Header />
            <Layout>
                <Menu />
                <Content className={styles.container}>
                    <Content className={styles.content}>
                        <Breadcrumb
                            style={{
                                marginBottom: '24px',
                            }}
                            routes={['首页', '详情页']}
                        />
                        <Outlet />
                    </Content>
                    <Footer />
                </Content>
            </Layout>
        </Layout>
    );
};

export default PageLayout;
