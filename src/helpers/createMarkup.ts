import { DangerouslySetInnerHTMLType } from "./getTypes";

function createMarkup(el: string): DangerouslySetInnerHTMLType {
  return { __html: el };
}

export default createMarkup;
