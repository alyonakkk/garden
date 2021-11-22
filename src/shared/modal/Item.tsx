import styled from "styled-components";
import { ModalDataListType } from "../../helpers/getTypes";

interface IItem {
  el: ModalDataListType;
}

interface IIconStyle {
  img: string;
}

const Item = styled.li`
  display: flex;
  gap: 8px;
`;

const Icon = styled.div<IIconStyle>`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.img});
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.p`
  color: #f669a2;
  font-size: 14px;
  font-weight: 800;
`;

const SubTitle = styled.p`
  color: #959595;
  font-size: 12px;
  font-weight: 500;
`;

const ItemModal: React.FC<IItem> = ({ el }) => {
  return (
    <Item key={el.title}>
      <Icon img={el.img}></Icon>
      <TextWrapper>
        <Title>{el.title}</Title>
        <SubTitle>{el.subtitle}</SubTitle>
      </TextWrapper>
    </Item>
  );
};

export default ItemModal;
