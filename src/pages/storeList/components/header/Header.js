import style from "../../../../shared/header/header.module.css";
import storeList from "../../storeList.module.css";

function Header({ title }) {
  return (
    <header className={style.header + " " + storeList.header}>
      <div className={style.title}>{title}</div>
      <div className={style.wrapper}>
        <div className={style.map}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.32 5.04999L15.32 3.04999H15.25C15.2035 3.04532 15.1566 3.04532 15.11 3.04999H14.68L9 4.99999L3.32 3.04999C3.16962 3.00041 3.00961 2.98724 2.85314 3.01158C2.69667 3.03592 2.54822 3.09707 2.42 3.18999C2.29076 3.28201 2.18527 3.40346 2.11224 3.5443C2.03921 3.68514 2.00074 3.84134 2 3.99999V18C1.99946 18.2096 2.06482 18.4141 2.18685 18.5846C2.30887 18.7551 2.48138 18.8829 2.68 18.95L8.68 20.95C8.88145 21.0157 9.09856 21.0157 9.3 20.95L15 19.05L20.68 21C20.7862 21.0144 20.8938 21.0144 21 21C21.2091 21.0029 21.4132 20.9361 21.58 20.81C21.7092 20.718 21.8147 20.5965 21.8878 20.4557C21.9608 20.3148 21.9993 20.1586 22 20V5.99999C22.0005 5.79035 21.9352 5.58584 21.8132 5.41536C21.6911 5.24489 21.5186 5.11708 21.32 5.04999ZM8 18.61L4 17.28V5.38999L8 6.71999V18.61ZM14 17.28L10 18.61V6.71999L14 5.38999V17.28ZM20 18.61L16 17.28V5.38999L20 6.71999V18.61Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={style.logo + " " + style.logo__storeList}></div>
      </div>
    </header>
  );
}

export default Header;
