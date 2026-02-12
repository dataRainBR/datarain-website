import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Card } from '@/components/ui/card';
import { GripVertical } from 'lucide-react';

interface DroppableBlockProps {
  id: string;
  icon: React.ReactNode;
  label: string;
}

export const DroppableBlock: React.FC<DroppableBlockProps> = ({ id, icon, label }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
  });

  return (
    <Card
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`p-3 cursor-grab active:cursor-grabbing hover:bg-accent hover:border-primary transition-all duration-200 ${
        isDragging ? 'opacity-30 scale-95' : 'hover:scale-102'
      }`}
    >
      <div className="flex items-center gap-2">
        <GripVertical className="h-4 w-4 text-muted-foreground" />
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
    </Card>
  );
};
