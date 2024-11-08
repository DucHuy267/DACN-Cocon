import { Menu } from "antd";
import React, { useState } from 'react';
import { getItem } from "../../utils";
import { UserOutlined, ProductOutlined, AppstoreOutlined, ShoppingOutlined, LayoutOutlined } from '@ant-design/icons'
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import AdminCategory from "../../components/AdminCategory/AdminCategory";

const AdminPage = () => {
    const items = [
        getItem('Dashboard', 'dashboard', <LayoutOutlined />),
        getItem('Người dùng', 'user', <UserOutlined />),
        getItem('Danh mục', 'category', <AppstoreOutlined />),
        getItem('Sản phẩm', 'product', <ProductOutlined />),
        getItem('Đơn hàng', 'order', <ShoppingOutlined />),
    ];

    const [keySelected, setKeySelected] = useState('')

    const renderPage = (key) => {
        switch (key) {
            case 'user':
                return (
                    <AdminUser />
                )
            case 'category':
                return (
                    <AdminCategory />
                )
            case 'product':
                return (
                    <AdminProduct />
                )

            default:
                return <></>
        }
    }

    const handleOnclick = ({ key }) => {
        setKeySelected(key)
    }
    console.log('keySelected', keySelected)

    return (
        <div style={{ display: 'flex', }}>
            <Menu
                mode="inline"
                style={{
                    width: 256,
                    boxShadow: '1px 1px 2px #ccc',
                    height: '100vh'
                }}
                items={items}
                onClick={handleOnclick}
            />
            <div style={{ flex: 1, padding: '15px' }}>
                {renderPage(keySelected)}
            </div>
        </div>

    )
}

export default AdminPage;

