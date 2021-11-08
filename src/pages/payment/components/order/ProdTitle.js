import payment from "../../payment.module.css";

function ProdTitle({ title }) {
  return (
    <div className={payment.title_block}>
      <div className={payment.icon}>
        <svg
          width="20"
          height="25"
          viewBox="0 0 20 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.47456 22.1275C1.59358 23.1972 2.49483 24.004 3.57113 24.004H12.3038C13.3801 24.004 14.2816 23.1972 14.4004 22.1268L14.5035 21.1915H16.8434C17.8787 21.1915 18.7537 20.4501 18.9242 19.4278L19.8615 13.757C20.0772 12.4633 19.0767 11.2539 17.7809 11.2539H15.5986L15.6677 10.6277C15.7134 10.2121 15.3877 9.84768 14.9688 9.84768H14.1446C14.2228 9.62759 14.2656 9.39101 14.2656 9.14455C14.2656 8.40535 13.8831 7.75405 13.306 7.37722L16.9375 2.53516C17.1704 2.22443 17.1074 1.7837 16.7969 1.55079C16.4863 1.31769 16.0454 1.38068 15.8125 1.69141L12.7748 5.74153C12.5701 5.0406 12.0107 4.48927 11.3048 4.29664C11.4006 4.05604 11.4531 3.79383 11.4531 3.51954V0.707035C11.4531 0.422672 11.2817 0.166324 11.019 0.0573756C10.7562 -0.0513893 10.4537 0.00885257 10.2527 0.209903C9.47868 0.983891 8.44962 1.41016 7.35501 1.41016H6.53122C5.36813 1.41016 4.42184 2.35645 4.42184 3.51954C4.42184 3.79383 4.47439 4.05604 4.57015 4.29664C3.67531 4.54091 3.01558 5.36085 3.01558 6.33205C3.01558 6.60634 3.06814 6.86855 3.1639 7.10915C2.26906 7.35341 1.60933 8.17336 1.60933 9.14455C1.60933 9.39101 1.65218 9.62759 1.73018 9.84768H0.906201C0.70625 9.84768 0.515819 9.93282 0.382518 10.0817C0.249034 10.2306 0.185313 10.429 0.207286 10.6279C0.235484 10.8859 1.47401 22.1224 1.47456 22.1275ZM13.3986 18.3789H10.3737C10.1228 18.3789 9.89085 18.5126 9.76506 18.73C9.38859 19.3809 8.68821 19.7852 7.93748 19.7852C7.18674 19.7852 6.48636 19.3809 6.10989 18.73C5.9841 18.5126 5.75229 18.3789 5.50125 18.3789H2.47634L2.32125 16.9727H5.50125C5.7521 16.9727 5.9841 16.8388 6.10971 16.6217C6.48636 15.9707 7.18674 15.5664 7.93748 15.5664C8.68821 15.5664 9.38859 15.9707 9.76506 16.6217C9.89067 16.8388 10.1227 16.9727 10.3737 16.9727H13.5535L13.3986 18.3789ZM12.3038 22.5977H3.57113C3.21224 22.5977 2.91195 22.3287 2.87239 21.9728L2.63124 19.7852H5.12497C5.78415 20.6615 6.82767 21.1915 7.93748 21.1915C9.04728 21.1915 10.0908 20.6615 10.75 19.7852H13.2435L13.0026 21.9722C12.963 22.3287 12.6625 22.5977 12.3038 22.5977ZM17.7809 12.6602C18.2079 12.6602 18.5472 13.089 18.4743 13.5266L17.5368 19.1976C17.4802 19.538 17.1885 19.7852 16.8434 19.7852H14.6584C15.5897 11.3402 14.662 19.7532 15.4435 12.6602H17.7809ZM3.01558 9.14455C3.01558 8.75692 3.33108 8.44143 3.71871 8.44143H6.53122C6.91959 8.44143 7.23435 8.12667 7.23435 7.7383C7.23435 7.34993 6.91959 7.03517 6.53122 7.03517H5.12497C4.73733 7.03517 4.42184 6.71968 4.42184 6.33205C4.42184 5.94441 4.73733 5.62892 5.12497 5.62892H6.53122C6.91959 5.62892 7.23435 5.31416 7.23435 4.92579C7.23435 4.53743 6.91959 4.22267 6.53122 4.22267C6.14358 4.22267 5.82809 3.90718 5.82809 3.51954C5.82809 3.13191 6.14358 2.81641 6.53122 2.81641H7.35501C8.31303 2.81641 9.23387 2.57325 10.0469 2.11622V3.51954C10.0469 3.90718 9.73137 4.22267 9.34373 4.22267C8.95536 4.22267 8.6406 4.53743 8.6406 4.92579C8.6406 5.31416 8.95536 5.62892 9.34373 5.62892H10.75C11.1376 5.62892 11.4531 5.94441 11.4531 6.33205C11.4531 6.71968 11.1376 7.03517 10.75 7.03517H9.34373C8.95536 7.03517 8.6406 7.34993 8.6406 7.7383C8.6406 8.12667 8.95536 8.44143 9.34373 8.44143H12.1544H12.1557H12.1564C12.5441 8.44143 12.8594 8.75692 12.8594 9.14455C12.8594 9.53219 12.5439 9.84768 12.1562 9.84768H3.71871C3.33108 9.84768 3.01558 9.53219 3.01558 9.14455ZM14.1838 11.2539C14.1239 11.7978 13.7685 15.0232 13.7086 15.5664H10.75C10.0908 14.6901 9.04728 14.1602 7.93748 14.1602C6.82767 14.1602 5.78415 14.6901 5.12497 15.5664H2.16634L1.69099 11.2539H14.1838Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className={payment.card_title}>{title}</p>
    </div>
  );
}

export default ProdTitle;
