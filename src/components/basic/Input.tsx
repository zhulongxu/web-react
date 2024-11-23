import React from 'react';
import { Input as AntInput } from 'antd';

interface InputProps {
  placeholder?: string;
  allowClear?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, allowClear }) => {
  return <AntInput placeholder={placeholder} allowClear={allowClear} />;
};

export default Input; 