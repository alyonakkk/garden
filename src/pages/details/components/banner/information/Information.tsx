import { DetailCardType } from "../../../../../helpers/getTypes";
import styled from "styled-components";

interface IInformation {
  detailCard: DetailCardType;
}

const Container = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  font-size: 13px;
  font-weight: 600;
  line-height: 16px;

  background-color: #f3f4f0;
  border-radius: 10px;
`;

const Information: React.FC<IInformation> = ({ detailCard }) => {
  return (
    <Container>
      <div>{detailCard.desc}</div>
    </Container>
  );
};

export default Information;
