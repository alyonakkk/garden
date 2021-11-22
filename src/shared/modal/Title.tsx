import { ModalDataItemType } from "../../helpers/getTypes";
import styled from "styled-components";

interface ITitle {
  data: ModalDataItemType;
}

const H1 = styled.h1`
  color: #f3f4f0;
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
`;

const Title: React.FC<ITitle> = ({ data }) => {
  return <H1>{data.title}</H1>;
};

export default Title;
