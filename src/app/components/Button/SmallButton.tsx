import styled from 'styled-components';
import React from 'react';

const RoundBox = styled.button`
  width: 36px;
  min-width: 32px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: 0;
  background: white;

  &:hover {
    background: rgba(0, 0, 0, 0.07);
  }

  & svg {
    fill: #646464;
  }
`;
export default function SmallButton({
  className,
  value,
  onClick,
  Icon,
}: {
  className?: string;
  value?: string;
  onClick?: () => void;
  Icon: () => JSX.Element;
}) {
  return (
    <RoundBox onClick={onClick} className={className} value={value}>
      <Icon />
    </RoundBox>
  );
}
