import { connect } from "react-redux";
import initModification from "../../../../../helpers/getInitModification";
import CheckBoxModification from "../../../../../shared/UI/checkbox/checkBoxModification";
import { setOrder, setModification } from "../../../../../store/actions";
import { RootState } from "../../../../../store/store";
import { ModDataType, ModificationType } from "../../../../../helpers/getTypes";
import styled from "styled-components";

interface IModificationList {
  title: string;
  list: ModDataType[];
  modification: any;
  setModification: (modification: ModificationType) => void;
}

const Item = styled.li`
  display: flex;
  gap: 20px;
`;

const Price = styled.span`
  color: #ff0000;
`;

const Title = styled.label`
  color: #959595;
`;

const List = styled.ul`
  margin-top: 12px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  color: #383838;
  list-style: none;
`;

const ModificationList: React.FC<IModificationList> = ({
  title,
  list,
  modification,
  setModification,
}) => {
  function renderList(list: ModDataType[]) {
    return list.map((item, index) => {
      function changeCheckBox() {
        item.checked = !item.checked;

        if (index === 0 && item.checked) {
          setModification(initModification);
          // const filteredMod = list.filter((value) => {
          //   return value.key === item.id && value.checked;
          // });

          // filteredMod.forEach((mod) => {
          //   setModification({
          //     ...modification,
          //     [item.id]: {
          //       ...modification[item.id],
          //       value: true,
          //     },
          //     [mod.id]: {
          //       ...modification[mod.id],
          //       value: false,
          //     },
          //   });
          // });
        } else {
          setModification(updateModification());
        }
      }

      function updateModification(): ModificationType {
        return {
          ...modification,
          [item.id]: {
            ...modification[item.id],
            value: item.checked,
          },
        };
      }

      function isChecked(): boolean {
        if (index !== 0 && list[0].checked) {
          item.checked = false;
        }
        return item.checked;
      }

      function isDisabled(): boolean {
        return index !== 0 && list[0].checked;
      }

      return (
        <Item key={item.id}>
          <CheckBoxModification
            item={item}
            isChecked={isChecked}
            isDisabled={isDisabled}
            changeCheckBox={changeCheckBox}
          />
          {item.price !== undefined && <Price>{item.price} ₽</Price>}
        </Item>
      );
    });
  }

  return (
    <form>
      <Title>{title}</Title>
      <List>{renderList(list)}</List>
    </form>
  );
};

const mapStateToProps = ({ main, card }: RootState) => {
  return {
    order: main.order,
    detailCard: card.detailCard,
    modification: main.modification,
  };
};

const mapDispatchToProps = {
  setOrder,
  setModification,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModificationList);
