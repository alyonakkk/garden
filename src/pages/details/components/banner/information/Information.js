import details from "../../../details.module.css";

function Information({ desc }) {
  return (
    <div className={details.container}>
      <div className={details.desc}>{desc}</div>
    </div>
  );
}

export default Information;
