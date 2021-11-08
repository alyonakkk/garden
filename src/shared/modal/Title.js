import modal from "./modal.module.css";

function Title({ data }) {
  return (
    <h1 className={modal.title}>
      {data.title}
      {/* Всё прошло <span className={modal.title_pink}>успешно</span> */}
    </h1>
  );
}

export default Title;
