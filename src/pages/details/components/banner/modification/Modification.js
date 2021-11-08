import ModificationList from "./ModificationList";
import details from "../../../details.module.css";

function Modification() {
  const additivesData = [
    {
      id: "additives",
      title: "Без добавок",
      checked: true,
    },
    {
      id: "cream",
      title: "Сливки",
      price: 20,
      checked: false,
    },
  ];

  const optionData = [
    {
      id: "option",
      title: "Без модификаций",
      checked: true,
    },
    {
      id: "sugarLess",
      title: "Меньше сахара",
      checked: false,
    },
    {
      id: "soyaMilk",
      title: "Соевое молоко",
      price: 20,
      checked: false,
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
