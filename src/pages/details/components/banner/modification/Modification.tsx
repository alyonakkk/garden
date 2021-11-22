import ModificationList from "./ModificationList";
import { ModDataType } from "../../../../../helpers/getTypes";
import styled from "styled-components";

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

const Modification: React.FC = () => {
  const additivesData: ModDataType[] = [
    {
      id: "additives",
      title: "Без добавок",
      checked: true,
      key: "",
    },
    {
      id: "cream",
      title: "Сливки",
      price: 20,
      checked: false,
      key: "additives",
    },
  ];

  const optionData: ModDataType[] = [
    {
      id: "option",
      title: "Без модификаций",
      checked: true,
      key: "",
    },
    {
      id: "sugarLess",
      title: "Меньше сахара",
      checked: false,
      key: "option",
    },
    {
      id: "soyaMilk",
      title: "Соевое молоко",
      price: 20,
      checked: false,
      key: "option",
    },
  ];

  return (
    <Container>
      <ModificationList title="Добавки" list={additivesData} />
      <ModificationList title="Опции" list={optionData} />
    </Container>
  );
};

export default Modification;
