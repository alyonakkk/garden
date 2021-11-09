import ModificationList from "./ModificationList";
import details from "../../../details.module.css";

function Modification() {
  const additivesData = [
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

  const optionData = [
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
    <div className={details.container}>
      <ModificationList title="Добавки" list={additivesData} />
      <ModificationList title="Опции" list={optionData} />
    </div>
  );
}

export default Modification;
