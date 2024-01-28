import styled from 'styled-components';
import React from 'react';

const RoundBox = styled.button`
  width: 36px !important;
  min-width: 32px !important;
  height: 36px !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding: 3px !important;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: 0;
  background: white;

  &:hover {
    background: rgba(0, 0, 0, 0.07) !important;
  }

  & svg {
    fill: #646464 !important;
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
