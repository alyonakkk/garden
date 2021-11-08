import modal from "./modal.module.css";

function Image({ data }) {
  return (
    <div className={modal.img_wrapper}>
      <div
        className={modal.img}
        style={{ backgroundImage: `url(${data.img})` }}
      ></div>
    </div>
  );
}

export default Image;
