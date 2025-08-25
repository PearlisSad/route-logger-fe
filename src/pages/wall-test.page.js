import { useState, useCallback, useMemo } from 'react';
import { Stage, Layer, Rect, Text, Shape } from 'react-konva';
import { useParams } from 'react-router-dom';

/**
 * Wall display component with interactive drawing functionality
 */
export default function WallTest() {
  const { id } = useParams();
  const [points, setPoints] = useState([]);

  // Memoize dimensions to avoid recalculation on every render
  const stageDimensions = useMemo(
    () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }),
    []
  );

  // Use useCallback to prevent unnecessary re-renders of child components
  const handleClick = useCallback((e) => {
    const stage = e.target.getStage();
    const pos = stage.getPointerPosition();
    if (!pos || !stage) return;
    setPoints((prevPoints) => [...prevPoints, [pos.x, pos.y]]);
  }, []);

  // Memoize the shape drawing function
  const sceneFunc = useCallback(
    (context, shape) => {
      if (!points.length) return;

      context.beginPath();
      context.moveTo(points[0][0], points[0][1]);

      for (let index = 1; index < points.length; index++) context.lineTo(points[index][0], points[index][1]);

      context.strokeShape(shape);
    },
    [points]
  );

  return (
    <Stage width={stageDimensions.width} height={stageDimensions.height} onMouseUp={handleClick}>
      <Layer>
        <Text text={`Wall ID: ${id}`} fontSize={15} x={10} y={10} />
        {points.length > 0 && <Shape sceneFunc={sceneFunc} stroke="black" fill="blue" strokeWidth={4} />}
      </Layer>
    </Stage>
  );
}
