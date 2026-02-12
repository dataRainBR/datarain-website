import React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface DropZoneProps {
  id: string;
  isOver?: boolean;
}

export const DropZone: React.FC<DropZoneProps> = ({ id, isOver }) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`h-2 transition-all ${
        isOver ? 'h-16 bg-primary/20 border-2 border-dashed border-primary rounded-lg' : ''
      }`}
    />
  );
};
