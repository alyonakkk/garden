import { ModalDataItemType } from "../../helpers/getTypes";
import styled from "styled-components";

interface IImage {
  data: ModalDataItemType;
}

interface IImgStyle {
  img: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.div<IImgStyle>`
  width: 180px;
  height: 144px;

  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.img});
`;

const Image: React.FC<IImage> = ({ data }) => {
  return (
    <Wrapper>
      <Img img={data.img}></Img>
    </Wrapper>
  );
};

export default Image;
