import { DangerouslySetInnerHTMLType } from "../../../../helpers/getTypes";
import styled from "styled-components";

interface INavigationItem {
  title: string;
  svg: DangerouslySetInnerHTMLType;
  onClick: () => void;
}

const Item = styled.li`
  display: flex;
  gap: 6px;
  width: max-content;
`;

const NavigationItem: React.FC<INavigationItem> = ({ title, svg, onClick }) => {
  return (
    <Item onClick={onClick}>
      <div dangerouslySetInnerHTML={svg} />
      <p>{title}</p>
    </Item>
  );
};

export default NavigationItem;
