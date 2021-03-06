import {
  HeaderEl,
  HeaderWrapper,
  Back,
  Title,
} from "../../../../shared/infoHeader/infoHeader";
import { useHistory } from "react-router-dom";
import { DetailCardType } from "../../../../helpers/getTypes";
import styled from "styled-components";

interface IHeader {
  detailCard: DetailCardType;
  activeStore: string;
}

const Size = styled.p`
  font-size: 10px;
  font-weight: 800;
  line-height: 14px;
`;

const Favorite = styled.div`
  cursor: pointer;
`;

const Header: React.FC<IHeader> = ({ detailCard, activeStore }) => {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <HeaderEl>
      <HeaderWrapper>
        <Back onClick={handleBack}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 5.99994H3.41L6.71 2.70994C6.89831 2.52164 7.00409 2.26624 7.00409 1.99994C7.00409 1.73364 6.89831 1.47825 6.71 1.28994C6.5217 1.10164 6.2663 0.99585 6 0.99585C5.7337 0.99585 5.47831 1.10164 5.29 1.28994L0.290003 6.28994C0.198963 6.38505 0.127598 6.49719 0.0800031 6.61994C-0.0200149 6.8634 -0.0200149 7.13648 0.0800031 7.37994C0.127598 7.50269 0.198963 7.61484 0.290003 7.70994L5.29 12.7099C5.38297 12.8037 5.49357 12.8781 5.61543 12.9288C5.73729 12.9796 5.86799 13.0057 6 13.0057C6.13202 13.0057 6.26272 12.9796 6.38458 12.9288C6.50644 12.8781 6.61704 12.8037 6.71 12.7099C6.80373 12.617 6.87813 12.5064 6.92889 12.3845C6.97966 12.2627 7.0058 12.132 7.0058 11.9999C7.0058 11.8679 6.97966 11.7372 6.92889 11.6154C6.87813 11.4935 6.80373 11.3829 6.71 11.2899L3.41 7.99994H11C11.2652 7.99994 11.5196 7.89458 11.7071 7.70705C11.8946 7.51951 12 7.26516 12 6.99994C12 6.73472 11.8946 6.48037 11.7071 6.29283C11.5196 6.1053 11.2652 5.99994 11 5.99994Z"
              fill="currentColor"
            />
          </svg>
        </Back>
        <Title>{detailCard.name}</Title>
      </HeaderWrapper>
      <HeaderWrapper>
        <Size>{detailCard.size} ????.</Size>
        <Favorite>
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.66 0.990044C16.02 -0.809956 12.76 0.0300438 11 2.09004C9.24 0.0300438 5.98 -0.819956 3.34 0.990044C1.94 1.95004 1.06 3.57004 1 5.28004C0.86 9.16004 4.3 12.27 9.55 17.04L9.65 17.13C10.41 17.82 11.58 17.82 12.34 17.12L12.45 17.02C17.7 12.26 21.13 9.15004 21 5.27004C20.94 3.57004 20.06 1.95004 18.66 0.990044ZM11.1 15.55L11 15.65L10.9 15.55C6.14 11.24 3 8.39004 3 5.50004C3 3.50004 4.5 2.00004 6.5 2.00004C8.04 2.00004 9.54 2.99004 10.07 4.36004H11.94C12.46 2.99004 13.96 2.00004 15.5 2.00004C17.5 2.00004 19 3.50004 19 5.50004C19 8.39004 15.86 11.24 11.1 15.55Z"
              fill="currentColor"
            />
          </svg>
        </Favorite>
      </HeaderWrapper>
    </HeaderEl>
  );
};

export default Header;
