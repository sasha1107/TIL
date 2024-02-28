import React, { useRef, useEffect, useState } from 'react';
import './style.css';

function Bar({ children }: { children: React.ReactNode }) {
  return <div className='bar'>{children}</div>;
}
function Marker({ pos, active = false }: { pos: number; active?: boolean }) {
  const cn = ['marker', !active || 'active'];
  return <div className={cn.join(' ')} style={{ left: `${pos}%` }}></div>;
}

function TextContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const maxHeight = Math.max(
        ...entries.map((entry) => entry.target.clientHeight)
      );
      setContainerHeight(maxHeight);
    });

    container.childNodes.forEach((child) => {
      observer.observe(child as Element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className='textContainer'
      ref={containerRef}
      style={{ height: `${containerHeight}px` }}
    >
      {children}
    </div>
  );
}
function Box({ children, pos }: { children: React.ReactNode; pos: number }) {
  const transform = (pos: number) => {
    switch (pos) {
      case 0:
        return 0;
      case 100:
        return -100;
      default:
        return -50;
    }
  };
  const align = (pos: number) => {
    switch (pos) {
      case 0:
        return 'flex-start';
      case 100:
        return 'flex-end';
      default:
        return 'center';
    }
  };
  return (
    <div
      className='box'
      style={{
        left: `${pos}%`,
        transform: `translateX(${transform(pos)}%)`,
        alignItems: align(pos),
      }}
    >
      {children}
    </div>
  );
}
const RangeBar = () => {
  return (
    <div>
      <Bar>
        <Marker pos={100} />
        <Marker pos={10} />
        <Marker pos={50} active />
        <Marker pos={30} active />
      </Bar>
      <TextContainer>
        <Box pos={10}>
          <div>title</div>
        </Box>
        <Box pos={0}>
          <div>title</div>
          <div>dsfsdfstitle</div>
        </Box>
        <Box pos={100}>
          <div>title</div>
          <div>sdfdsf</div>
        </Box>
        <Box pos={30}>
          <div style={{ fontSize: '18px' }}>title</div>
          <div style={{ fontSize: '12px' }}>sdfdsf</div>
        </Box>
      </TextContainer>
      <div>sdfdsfsd</div>
      <div>2222</div>
      <div>333</div>
    </div>
  );
};

export default RangeBar;
