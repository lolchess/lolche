import styled from "styled-components";

export const StyledLi = styled.li<{ color?: string }>`
  font-size: 12px;
  line-height: 3.66667;
  font-weight: 400;
  color: ${(props) => props.color || "#f5f5f7"};
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0 8px;
  height: 44px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  opacity: 0.8;
  cursor: pointer;
`;

interface StyledButtonProps {
  backgroundColor?: string;
  borderRadius?: string;
  height?: string;
  lineHeight?: string;
}

export const StyledButton = styled.div<StyledButtonProps>`
  height: ${(props) => props.height || "30px"};
  background-color: ${(props) => props.backgroundColor || "#404040"};
  font-size: 12px;
  padding: 0 10px;
  cursor: pointer;
  border-radius: ${(props) => props.borderRadius || "2em"};
  border: 0;
  font-weight: 400;
  line-height: ${(props) => props.lineHeight || "2.66667"};

  color: #f9f9f9;
`;

interface StyledStackProps {
  height?: string;
  width?: string;
  alignItem?: string;
  justifyContent?: string;
  column?: boolean;
}

export const StyledDivider = styled.div`
  border: 1px solid #f0f0f0;
  width: 100%;
`;
export const StyledStack = styled.div<StyledStackProps>`
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  display: flex;
  align-items: ${(props) => props.alignItem || "space-between"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || "100%"};
`;

interface StyledSectionProps {
  justifyContent?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

export const StyledSection = styled.section<StyledSectionProps>`
  background-color: ${(props) => props.color || ""};
  top: 50px;
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: center;
  left: 0;
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  height: ${(props) => props.height || "500px"};
`;

export const StyledInput = styled.input`
  padding: 3px 10px;
  width: 80%;
  height: 30px;
  margin: 5px 5px;
  font-size: 15px;
  max-width: 300px;
  outline: none;
  border: 1px solid #bbb;
  border-radius: 1px;
  display: inline-block;
  box-sizing: border-box;
  transition: 0.2s ease all;
`;
export const StyledTh = styled.th`
  padding: 10px 10px;
  font-size: 15px;
`;
export const StyledTd = styled.td`
  padding: 10px 10px;
  font-size: 15px;
`;
export const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #e6e6e6;
    transform: translate3d(6px, -6px, 0);

    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
  }
`;
