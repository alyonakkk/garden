import payment from "../../payment.module.css";

function OrderHeader({ title }) {
  return (
    <div className={payment.title_wrapper}>
      <p className={payment.title}>{title}</p>
    </div>
  );
}

export default OrderHeader;
