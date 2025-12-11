'use client';

import { useEffect, useRef, useState } from 'react';
import { useLenis } from 'lenis/react';

const GridWithLag = ({ children }) => {
  const gridRef = useRef(null);
  const lenis = useLenis();
  const [currentColumnCount, setCurrentColumnCount] = useState(null);

  const baseLag = 0.2;
  const lagScale = 0.3;

  const groupItemsByColumn = () => {
    const grid = gridRef.current;
    const styles = getComputedStyle(grid);
    const columnsRaw = styles.getPropertyValue('grid-template-columns');
    const numColumns = columnsRaw.split(' ').filter(Boolean).length;

    const columns = Array.from({ length: numColumns }, () => []);
    Array.from(grid.querySelectorAll('.grid__item')).forEach((item, index) => {
      columns[index % numColumns].push(item);
    });

    return { columns, numColumns };
  };

  const clearGrid = () => {
    const grid = gridRef.current;
    grid.querySelectorAll('.grid__column').forEach((col) => col.remove());
    // Restore original order
    const items = Array.from(grid.querySelectorAll('.grid__item'));
    items.forEach((item) => grid.appendChild(item));
  };

  const buildGrid = (columns) => {
    const grid = gridRef.current;
    const fragment = document.createDocumentFragment();
    const columnContainers = [];

    columns.forEach((column, i) => {
      const lag = baseLag + (i + 1) * lagScale;
      const columnContainer = document.createElement('div');
      columnContainer.className = 'grid__column';
      column.forEach((item) => columnContainer.appendChild(item));
      fragment.appendChild(columnContainer);
      columnContainers.push({ element: columnContainer, lag });
    });

    grid.appendChild(fragment);
    return columnContainers;
  };

  const applyLagEffects = (columnContainers) => {
    columnContainers.forEach(({ element, lag }) => {
      // Simple lag effect using requestAnimationFrame and Lenis
      let previous = 0;
      const animate = () => {
        const scroll = lenis.scroll;
        previous += (scroll - previous) * lag;
        element.style.transform = `translateY(${previous}px)`;
        requestAnimationFrame(animate);
      };
      animate();
    });
  };

  const init = () => {
    clearGrid();
    const { columns, numColumns } = groupItemsByColumn();
    setCurrentColumnCount(numColumns);
    const columnContainers = buildGrid(columns);
    applyLagEffects(columnContainers);
  };

  const getColumnCount = () => {
    const grid = gridRef.current;
    const styles = getComputedStyle(grid);
    return styles.getPropertyValue('grid-template-columns').split(' ').filter(Boolean).length;
  };

  // ─────────────── Effects ───────────────
  useEffect(() => {
    console.log('1')
    if (!gridRef.current || !lenis) return;
    console.log('2')

    // Initialize grid layout
    init();

    // Resize listener
    const onResize = () => {
      const newCount = getColumnCount();
      if (newCount !== currentColumnCount) {
        init();
      }
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [lenis]);

  return (
    <div ref={gridRef} className="w-full h-auto gridC">
      {children}
    </div>
  );
};

export default GridWithLag;