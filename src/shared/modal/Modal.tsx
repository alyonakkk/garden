import { connect } from "react-redux";
import { setActiveModal } from "../../store/actions";
import { RootState } from "../../store/store";
import { ModalDataItemType, ModalDataListType } from "../../helpers/getTypes";
import styled from "styled-components";
import ItemModal from "./Item";

interface IModal {
  data: ModalDataItemType;
  setActiveModal: (activeModal: boolean) => void;
}

interface ILinkStyle {
  bc: string;
}

const ModalEl = styled.div`
  padding: 22px 22px 46px 22px;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: #f3f4f0;
  border: 2px solid #383838;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 800;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Text = styled.p`
  color: #959595;
  font-size: 13px;
  font-weight: 400;
`;

const Link = styled.a<ILinkStyle>`
  padding: 12px 30px;

  position: absolute;
  bottom: -20px;
  right: 22px;

  width: max-content;

  color: #ffffff;

  border: 2px solid #383838;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: ${(props) => props.bc};
`;

const Modal: React.FC<IModal> = ({ data, setActiveModal }) => {
  const modalList = data.modal.list ? data.modal.list : "";

  function handleLink() {
    setActiveModal(false);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  function renderSuccessList() {
    return Object.values(modalList).map((el: ModalDataListType) => {
      return <ItemModal el={el} key={el.title} />;
    });
  }

  return (
    <ModalEl>
      <Title>{data.modal.title}</Title>
      {modalList ? (
        <List>{renderSuccessList()}</List>
      ) : (
        <Text>{data.modal.text}</Text>
      )}
      <Link bc={data.style.backgroundColorButton} href="/" onClick={handleLink}>
        Ok
      </Link>
    </ModalEl>
  );
};

const mapStateToProps = ({ main }: RootState) => {
  return {
    orderTotal: main.orderTotal,
  };
};

const mapDispatchToProps = {
  setActiveModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
