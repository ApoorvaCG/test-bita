import React from 'react';
import { ITaskListProps } from '../../types';

const TaskList: React.FC<ITaskListProps> = ({ items }) => {
  return (
    <ul className="list-disc pl-4 text-gray-700">
      {items.map((item) => (
        <li key={item.id}>{item.content}</li>
      ))}
    </ul>
  );
};

export default TaskList;
