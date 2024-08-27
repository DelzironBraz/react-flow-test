import { Handle, Position, type NodeProps } from '@xyflow/react';
import { type PositionLoggerNode } from './types';

export function PositionLoggerNode({
  positionAbsoluteX,
  positionAbsoluteY,
  data,
}: NodeProps<PositionLoggerNode>) {
  const x = `${Math.round(positionAbsoluteX)}px`;
  const y = `${Math.round(positionAbsoluteY)}px`;

  return (
    <div className="react-flow__node-default">
      {data.label && <div>{data.label}</div>}

      <div>
        {x} {y}
      </div>

      {/* Formulário com 5 selects */}
      <form>
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <label htmlFor={`select-${index}`}>Select {index + 1}:</label>
            <select id={`select-${index}`} name={`select-${index}`}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        ))}
      </form>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
