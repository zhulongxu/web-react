import React, { useRef, useEffect } from 'react';

interface CanvasProps {
  onLoad: (container: HTMLDivElement) => void;
}

const Canvas: React.FC<CanvasProps> = ({ onLoad }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      onLoad(containerRef.current);
    }
  }, [onLoad]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default Canvas; 