import { HeaderStyleType } from "../../helpers/getTypes";
import styled from "styled-components";

interface IHeader {
  title: string;
  headerStyle: HeaderStyleType;
}

interface ILogoStyle {
  image: string;
}

interface IHeaderElStyle {
  black: boolean;
}

const HeaderEl = styled.header<IHeaderElStyle>`
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background-color: ${(props) => (props.black ? "#242424" : "#71d5be")};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const Title = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Map = styled.div`
  margin-right: 60px;

  color: white;
`;

const Logo = styled.div<ILogoStyle>`
  position: absolute;
  top: 0;
  right: 10px;

  width: 60px;
  height: 60px;
  background-image: ${(props) => props.image};
`;

const Header: React.FC<IHeader> = ({ title, headerStyle }) => {
  const { black, image, map } = headerStyle;

  return (
    <HeaderEl black={black}>
      <Title>{title}</Title>
      <Wrapper>
        <Map>{map && map}</Map>
        <Logo image={image}></Logo>
      </Wrapper>
    </HeaderEl>
  );
};

export default Header;
