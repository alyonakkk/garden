import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Load = styled.img`
  width: 100px;
  height: 100px;
`;

const Loader: React.FC = () => {
  return (
    <Wrapper>
      <Load src="https://i.gifer.com/XOsX.gif" alt="loader" />
    </Wrapper>
  );
};

export default Loader;
