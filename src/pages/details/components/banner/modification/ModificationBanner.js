import ModificationList from "./ModificationList";

function ModificationBanner() {
  const additivesData = [
    {
      id: "none",
      title: "Без добавок",
      checked: false,
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
      id: "none",
      title: "Без модификаций",
      checked: false,
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
    <div className="banner">
      <ModificationList title="Добавки" list={additivesData} />
      <ModificationList title="Опции" list={optionData} />
    </div>
  );
}

export default ModificationBanner;
