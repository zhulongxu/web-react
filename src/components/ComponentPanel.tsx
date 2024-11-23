import React, { useEffect, useRef } from 'react';
import { Graph } from '@antv/x6';
import { Stencil } from '@antv/x6-plugin-stencil';
import { basicNodes, containerNodes } from '../config/componentConfig';
import '../styles/stencil.css';

interface ComponentPanelProps {
  graph: Graph;
}

const ComponentPanel: React.FC<ComponentPanelProps> = ({ graph }) => {
  const stencilContainer = useRef<HTMLDivElement>(null);
  const stencilRef = useRef<Stencil | null>(null);
  
  // 使用 useRef 来跟踪是否已经初始化
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!stencilContainer.current || !graph || isInitialized.current) return;
    
    isInitialized.current = true;

    const stencil = new Stencil({
      title: '组件库',
      target: graph,
      stencilGraphWidth: 200,
      stencilGraphHeight: 500,
      collapsable: true,
      groups: [
        {
          name: 'basic',
          title: '基础组件',
          graphHeight: 250,
          layoutOptions: {
            columns: 2,
            marginX: 10,
            marginY: 10,
          },
        },
        {
          name: 'container',
          title: '容器组件',
          graphHeight: 250,
          layoutOptions: {
            columns: 1,
            marginX: 10,
            marginY: 10,
          },
        },
      ],
      getDragNode: (node) => node.clone(),
    });

    stencilRef.current = stencil;
    stencilContainer.current.appendChild(stencil.container);

    const basicStencilNodes = basicNodes.map((node) => graph.createNode(node));
    const containerStencilNodes = containerNodes.map((node) => graph.createNode(node));

    stencil.load(basicStencilNodes, 'basic');
    stencil.load(containerStencilNodes, 'container');

    // 添加鼠标悬停事件
    graph.on('node:mouseenter', ({ node }) => {
      const ports = node.getPorts();
      ports.forEach(port => {
        if (port.id) {
          node.portProp(port.id, 'attrs/circle/visibility', 'visible');
        }
      });
    });

    graph.on('node:mouseleave', ({ node }) => {
      const ports = node.getPorts();
      ports.forEach(port => {
        if (port.id) {
          node.portProp(port.id, 'attrs/circle/visibility', 'hidden');
        }
      });
    });

    return () => {
      if (stencilRef.current) {
        stencilRef.current.dispose();
        stencilRef.current = null;
      }
      isInitialized.current = false;
      // 移除事件监听
      graph.off('node:mouseenter');
      graph.off('node:mouseleave');
    };
  }, [graph]);

  return (
    <div 
      ref={stencilContainer} 
      style={{ 
        width: '240px',
        height: '100%',
        border: '1px solid #f0f0f0',
      }} 
    />
  );
};

export default ComponentPanel; 