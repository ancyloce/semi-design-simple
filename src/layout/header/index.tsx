import React from 'react';
import { Avatar, Button, Layout, Nav } from '@douyinfe/semi-ui';
import { IconBell, IconHelpCircle, IconSemiLogo } from '@douyinfe/semi-icons';
import Theme from './Theme';
import styles from './index.module.scss';

function LayoutHeader() {
    const { Header } = Layout;
    return (
        <Header className={styles.header}>
            <Nav mode="horizontal">
                <Nav.Header>
                    <IconSemiLogo style={{ width: '96px', height: '36px', fontSize: 36 }} />
                </Nav.Header>
                <Nav.Footer>
                    <Theme />
                    <Button
                        theme="borderless"
                        icon={<IconBell size="large" />}
                        className={styles.button}
                    />
                    <Button
                        theme="borderless"
                        icon={<IconHelpCircle size="large" />}
                        className={styles.button}
                    />
                    <Avatar color="orange" size="small">
                        YJ
                    </Avatar>
                </Nav.Footer>
            </Nav>
        </Header>
    );
}

export default LayoutHeader;
