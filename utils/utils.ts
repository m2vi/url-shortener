export const removeEmpty = <Type>(obj: any): Type => {
  const newObj: any = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (value === undefined) return;
    newObj[key] = value;
  });

  return newObj;
};
