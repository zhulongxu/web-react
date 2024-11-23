import React from 'react';
import { Menu } from 'antd';
import { FileOutlined, EditOutlined, EyeOutlined, SettingOutlined } from '@ant-design/icons';

const TopMenu: React.FC = () => {
  const menuItems = [
    {
      key: 'file',
      icon: <FileOutlined />,
      label: '文件',
    },
    {
      key: 'edit',
      icon: <EditOutlined />,
      label: '编辑',
    },
    {
      key: 'preview',
      icon: <EyeOutlined />,
      label: '预览',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '设置',
    },
  ];

  return <Menu mode="horizontal" selectedKeys={[]} items={menuItems} />;
};

export default TopMenu; 