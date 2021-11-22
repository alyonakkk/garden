export type HeaderStyleType = {
  black: boolean;
  image: string;
  map?: JSX.Element;
};

export type ModalDataType = {
  success: ModalDataItemType;
  loading: ModalDataItemType;
  faild: ModalDataItemType;
};

export type ModalDataItemType = {
  img: string;
  title: string;
  modal: {
    title: string;
    text?: string;
    list?: {
      item1: ModalDataListType;
      item2: ModalDataListType;
      item3: ModalDataListType;
    };
  };
  style: {
    backgroundColorBody: string;
    backgroundColorButton: string;
  };
};

export type ModalDataListType = {
  img: string;
  title: string | number;
  subtitle: string;
};

export type OrderItemType = {
  name?: string;
  slug: string;
  price: string;
  count: number;
  modification: ModificationType;
};

export type DetailCardType = {
  name: string;
  slug: string;
  size: string;
  price: string;
  desc: string;
};

export type OrderTotalType = {
  time: string;
  place: string;
  comment?: string;
  order?: OrderItemType[];
};

export type ModificationType = {
  additives: ModificationItemType;
  cream: ModificationItemType;
  option: ModificationItemType;
  sugarLess: ModificationItemType;
  soyaMilk: ModificationItemType;
};

export type ModificationItemType = {
  name: string;
  value: boolean;
  price: number;
};

export type ShopDataItemType = {
  name: string;
  slug: string;
  address: string;
};

export type AutorizationDataType = {
  phone: AutorizationDataItemType;
  code: AutorizationDataItemType;
  name: AutorizationDataItemType;
};

export type AutorizationDataItemType = {
  name: string;
  title: string;
  text: string;
  func?: () => void;
  form: {
    mask: string;
    label: string;
    placeholder: string;
    span?: string;
    button: string;
  };
};

export type NavDataType = {
  id: string;
  title: string;
};

export type DangerouslySetInnerHTMLType = {
  __html: string;
};

export type ShopItemType = {
  ocean: ShopItemItemType[];
  parus: ShopItemItemType[];
  monblan: ShopItemItemType[];
  kalinka: ShopItemItemType[];
  dezhnev: ShopItemItemType[];
  europ: ShopItemItemType[];
};

export type ShopItemItemType = {
  name: string;
  slug: string;
  price: string;
};

export type ModDataType = {
  id: string;
  title: string;
  checked: boolean;
  key: string;
  price?: number;
};

export type StyleDataType = {
  color: string;
  image: string;
  opacity: string;
};
