import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme,Spin } from 'antd';
import { TableEdit } from './TableEdit';

const { Header, Sider, Content } = Layout;


export const LayoutEdit = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [content, setContent] = useState(1)
    const [loading, setLoading] = useState(false);


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    const data = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            name: `Edward King ${i} - ${content}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // handle process when click
    const handleMenuClick = (e) => {
        setLoading(true)
        console.log('Clicked menu item:', e.key);
        setContent(e.key)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }




    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={handleMenuClick}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {loading ? 
                    <Spin tip="Loading" size="large">
                        <div className="content" />
                    </Spin> 
                    : <TableEdit columns={columns} data={data} />}
                </Content>
            </Layout>
        </Layout>
    )
}
