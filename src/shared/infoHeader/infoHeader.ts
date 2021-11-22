import styled from "styled-components";

const HeaderEl = styled.div`
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Back = styled.div`
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;

  color: #242424;

  border: 2px solid #383838;
  border-radius: 10px;

  transition: 0.1s ease;

  &:hover {
    border-color: #ffc633;
    color: #ffc633;
  }
`;

const Title = styled.p`
  color: #242424;
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
`;

export { HeaderEl, HeaderWrapper, Back, Title };
