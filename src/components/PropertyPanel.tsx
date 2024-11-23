import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const PropertyPanel: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: 'style',
      label: '样式',
      children: (
        <div style={{ padding: '16px' }}>
          {/* 样式属性配置 */}
          样式配置面板
        </div>
      ),
    },
    {
      key: 'event',
      label: '事件',
      children: (
        <div style={{ padding: '16px' }}>
          {/* 事件配置 */}
          事件配置面板
        </div>
      ),
    },
    {
      key: 'data',
      label: '数据',
      children: (
        <div style={{ padding: '16px' }}>
          {/* 数据配置 */}
          数据配置面板
        </div>
      ),
    },
  ];

  return <Tabs defaultActiveKey="style" items={items} />;
};

export default PropertyPanel; 