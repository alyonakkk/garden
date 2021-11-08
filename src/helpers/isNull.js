function isNull(value) {
  return !value && typeof value === "object";
}

export default isNull;
