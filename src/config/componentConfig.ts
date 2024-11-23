import { Node } from '@antv/x6';

// 基础组件组
export const basicNodes = [
  {
    shape: 'rect',
    width: 100,
    height: 40,
    label: '按钮',
    ports: {
      groups: {
        top: {
          position: 'top',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
        right: {
          position: 'right',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
        bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
        left: {
          position: 'left',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
      },
      items: [
        { group: 'top' },
        { group: 'right' },
        { group: 'bottom' },
        { group: 'left' },
      ],
    },
    attrs: {
      body: {
        fill: '#fff',
        stroke: '#d9d9d9',
        strokeWidth: 1,
        rx: 4,
        ry: 4,
      },
      label: {
        text: '按钮',
        fill: '#333',
        fontSize: 12,
      },
    },
  },
  {
    shape: 'rect',
    width: 100,
    height: 40,
    label: '输入框',
    ports: {
      groups: {
        top: {
          position: 'top',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
        right: {
          position: 'right',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
        bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
        left: {
          position: 'left',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
      },
      items: [
        { group: 'top' },
        { group: 'right' },
        { group: 'bottom' },
        { group: 'left' },
      ],
    },
    attrs: {
      body: {
        fill: '#fff',
        stroke: '#d9d9d9',
        strokeWidth: 1,
        rx: 4,
        ry: 4,
      },
      label: {
        text: '输入框',
        fill: '#333',
        fontSize: 12,
      },
    },
  },
];

// 容器组件组
export const containerNodes = [
  {
    shape: 'rect',
    width: 200,
    height: 100,
    label: '表单',
    ports: {
      groups: {
        top: {
          position: 'top',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
        right: {
          position: 'right',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
        bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
        left: {
          position: 'left',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
      },
      items: [
        { group: 'top' },
        { group: 'right' },
        { group: 'bottom' },
        { group: 'left' },
      ],
    },
    attrs: {
      body: {
        fill: '#fff',
        stroke: '#d9d9d9',
        strokeWidth: 1,
        rx: 4,
        ry: 4,
      },
      label: {
        text: '表单',
        fill: '#333',
        fontSize: 12,
      },
    },
  },
  {
    shape: 'rect',
    width: 200,
    height: 150,
    label: '卡片',
    ports: {
      groups: {
        top: {
          position: 'top',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
        right: {
          position: 'right',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
        bottom: {
          position: 'bottom',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
        left: {
          position: 'left',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              visibility: 'hidden',
            },
          },
        },
      },
      items: [
        { group: 'top' },
        { group: 'right' },
        { group: 'bottom' },
        { group: 'left' },
      ],
    },
    attrs: {
      body: {
        fill: '#fff',
        stroke: '#d9d9d9',
        strokeWidth: 1,
        rx: 4,
        ry: 4,
      },
      label: {
        text: '卡片',
        fill: '#333',
        fontSize: 12,
      },
    },
  },
]; 