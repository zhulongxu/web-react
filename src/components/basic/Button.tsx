import React from 'react';
import { Button as AntButton } from 'antd';

interface ButtonProps {
  text: string;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  size?: 'large' | 'middle' | 'small';
}

const Button: React.FC<ButtonProps> = ({ text, type = 'primary', size = 'middle' }) => {
  return (
    <AntButton type={type} size={size}>
      {text}
    </AntButton>
  );
};

export default Button; 