import { ReactNode } from 'react';

export interface ComponentConfig {
  type: string;
  title: string;
  icon?: ReactNode;
  defaultProps: Record<string, any>;
}

export const basicComponents: ComponentConfig[] = [
  {
    type: 'Button',
    title: '按钮',
    defaultProps: {
      text: '按钮',
      type: 'primary',
      size: 'middle'
    }
  },
  {
    type: 'Input',
    title: '输入框',
    defaultProps: {
      placeholder: '请输入',
      allowClear: true
    }
  }
]; 