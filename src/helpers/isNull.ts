function isNull(value: object): boolean {
  return !value && typeof value === "object";
}

export default isNull;
