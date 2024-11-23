import React, { useState, useCallback, useRef } from 'react';
import { Layout } from 'antd';
import { Graph, Edge } from '@antv/x6';
import ComponentPanel from './components/ComponentPanel';
import Canvas from './components/Canvas';
import TopMenu from './components/TopMenu';
import PropertyPanel from './components/PropertyPanel';
import './App.css';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [graph, setGraph] = useState<Graph | null>(null);
  const graphRef = useRef<Graph | null>(null);

  const initGraph = useCallback((container: HTMLDivElement) => {
    if (graphRef.current) return;
    
    const newGraph = new Graph({
      container,
      width: container.offsetWidth,
      height: container.offsetHeight,
      grid: true,
      background: {
        color: '#f8f9fa',
      },
      connecting: {
        snap: true,
        allowBlank: false,
        allowLoop: false,
        highlight: true,
        connector: {
          name: 'smooth',
          args: {
            direction: 'H',
          },
        },
        validateConnection({ sourceView, targetView, sourceMagnet, targetMagnet }) {
          if (!sourceMagnet || !targetMagnet) {
            return false;
          }
          if (sourceView === targetView) {
            return false;
          }
          return true;
        },
        createEdge(): Edge {
          return newGraph.createEdge({
            attrs: {
              line: {
                stroke: '#5F95FF',
                strokeWidth: 1,
                targetMarker: {
                  name: 'classic',
                  size: 8,
                },
              },
            },
          });
        },
      },
    });
    
    graphRef.current = newGraph;
    setGraph(newGraph);
  }, []);

  return (
    <Layout className="app-container">
      <Header className="app-header">
        <TopMenu />
      </Header>
      <Layout className="main-content">
        <Sider width={250} className="left-sider">
          {graph && <ComponentPanel graph={graph} />}
        </Sider>
        <Content className="canvas-container">
          <Canvas onLoad={initGraph} />
        </Content>
        <Sider width={300} className="right-sider">
          <PropertyPanel />
        </Sider>
      </Layout>
    </Layout>
  );
};

export default App;
