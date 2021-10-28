import classNames from "classnames";
import { useState } from "react";
import { connect } from "react-redux";
import style from "../../../../shared/footer/footer.module.css";
import FootreItem from "../../../../shared/footer/FootreItem";
import { setOrder } from "../../../../store/actions";

function Footer({ detailCard, order, setOrder }) {
  let [count, setCount] = useState(1);
  let [active, setActive] = useState(0);

  const itemData = [
    {
      id: 1,
      title: "К оплате",
      svg: "M9 10C8.73478 10 8.48043 10.1054 8.29289 10.2929C8.10536 10.4804 8 10.7348 8 11V13C8 13.2652 8.10536 13.5196 8.29289 13.7071C8.48043 13.8946 8.73478 14 9 14C9.26522 14 9.51957 13.8946 9.70711 13.7071C9.89464 13.5196 10 13.2652 10 13V11C10 10.7348 9.89464 10.4804 9.70711 10.2929C9.51957 10.1054 9.26522 10 9 10ZM21 11C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V6C22 5.73478 21.8946 5.48043 21.7071 5.29289C21.5196 5.10536 21.2652 5 21 5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11C3.26522 11 3.51957 11.1054 3.70711 11.2929C3.89464 11.4804 4 11.7348 4 12C4 12.2652 3.89464 12.5196 3.70711 12.7071C3.51957 12.8946 3.26522 13 3 13C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V18C2 18.2652 2.10536 18.5196 2.29289 18.7071C2.48043 18.8946 2.73478 19 3 19H21C21.2652 19 21.5196 18.8946 21.7071 18.7071C21.8946 18.5196 22 18.2652 22 18V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13C20.7348 13 20.4804 12.8946 20.2929 12.7071C20.1054 12.5196 20 12.2652 20 12C20 11.7348 20.1054 11.4804 20.2929 11.2929C20.4804 11.1054 20.7348 11 21 11ZM20 9.18C19.4208 9.3902 18.9205 9.77363 18.5668 10.2782C18.2132 10.7827 18.0235 11.3839 18.0235 12C18.0235 12.6161 18.2132 13.2173 18.5668 13.7218C18.9205 14.2264 19.4208 14.6098 20 14.82V17H10C10 16.7348 9.89464 16.4804 9.70711 16.2929C9.51957 16.1054 9.26522 16 9 16C8.73478 16 8.48043 16.1054 8.29289 16.2929C8.10536 16.4804 8 16.7348 8 17H4V14.82C4.57915 14.6098 5.07954 14.2264 5.43316 13.7218C5.78678 13.2173 5.97648 12.6161 5.97648 12C5.97648 11.3839 5.78678 10.7827 5.43316 10.2782C5.07954 9.77363 4.57915 9.3902 4 9.18V7H8C8 7.26522 8.10536 7.51957 8.29289 7.70711C8.48043 7.89464 8.73478 8 9 8C9.26522 8 9.51957 7.89464 9.70711 7.70711C9.89464 7.51957 10 7.26522 10 7H20V9.18Z",
      path: "/payment",
      counter: true,
    },
  ];

  function handleAdd() {
    let filtered = order.filter((el) => el.slug === detailCard.slug);

    if (filtered.length === 0 || order.length === 0) {
      let data = {
        name: detailCard.name,
        slug: detailCard.slug,
        price: detailCard.price,
        counter: count,
      };
      setOrder([...order, data]);
    } else {
    }
  }

  function renderFooterItem() {
    return itemData.map((item) => {
      let classFooterItem = classNames({
        [style.item]: true,
        [style.item__active]: item.id === active,
      });

      function handleItem() {
        setActive((active = item.id));
      }

      return (
        <FootreItem
          title={item.title}
          d={item.svg}
          path={item.path}
          checked={item.checked}
          counter={item.counter}
          className={classFooterItem}
          onClick={handleItem}
          key={item.title}
        />
      );
    });
  }

  return (
    <footer className={style.footer + " " + style.footer__flex}>
      <div className={style.price + " " + style.price__detail}>
        <button className={style.button} onClick={handleAdd}>
          Добавить
        </button>
        <p>{detailCard.price} ₽</p>
      </div>
      {renderFooterItem()}
    </footer>
  );
}

const mapStateToProps = ({ detailCard, order }) => {
  return {
    detailCard,
    order,
  };
};

const mapDispatchToProps = {
  setOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
