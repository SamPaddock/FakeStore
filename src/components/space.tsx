import styled from 'styled-components/native';

type SpaceProps = { size: number; horizontal?: boolean; };

export const Space = styled.View<SpaceProps>`
  ${({ horizontal, size }) =>
    horizontal
      ? `width: ${size}px;`
      : `height: ${size}px;`}
`;
