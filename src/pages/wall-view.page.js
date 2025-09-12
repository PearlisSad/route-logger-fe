import { useState, useCallback, useMemo } from 'react';
import { Container, ToggleButton } from 'react-bootstrap';
import { Stage, Layer, Text, Shape } from 'react-konva';
import { useParams } from 'react-router-dom';

/**
 * Wall display component with interactive drawing functionality
 */
export default function WallTest() {
  const { id } = useParams();
  const [points, setPoints] = useState([]);
  const [editMode, setEditMode] = useState(false);

  // Memoize dimensions to avoid recalculation on every render
  const stageDimensions = useMemo(
    () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }),
    []
  );

  // Use useCallback to prevent unnecessary re-renders of child components
  const handleClick = (e) => {
    if (!editMode) return;

    const stage = e.target.getStage();
    let pos = stage.getPointerPosition();
    if (!pos || !stage) return;

    setPoints((prevPoints) => {
      // Check for previous points and see if any are close, latching on if within 10,10
      const closePoint = prevPoints.find((point) => Math.abs(point.x - pos.x) < 10 && Math.abs(point.y - pos.y) < 10);

      return [...prevPoints, closePoint ? { x: closePoint.x, y: closePoint.y } : { x: pos.x, y: pos.y }];
    });
  };

  // Memoize the shape drawing function
  const sceneFunc = useCallback(
    (context, shape) => {
      if (!points.length) return;

      context.beginPath();
      context.moveTo(points[0].x, points[0].y);

      for (let index = 1; index < points.length; index++) context.lineTo(points[index].x, points[index].y);

      context.strokeShape(shape);
    },
    [points]
  );

  const handleEditModeClick = () => {
    setEditMode(!editMode);
  };

  return (
    <Container class="mt-4">
      <div>
        <Text text={`Wall ID: ${id}`} fontSize={15} x={10} y={10} />
        <ToggleButton variant="primary" onClick={handleEditModeClick}>
          {editMode ? 'Stop editing' : 'Edit'}
        </ToggleButton>
      </div>
      <Stage width={stageDimensions.width} height={stageDimensions.height} onMouseUp={handleClick}>
        <Layer>{points.length > 0 && <Shape sceneFunc={sceneFunc} stroke="black" fill="blue" strokeWidth={4} />}</Layer>
      </Stage>
    </Container>
  );
}
