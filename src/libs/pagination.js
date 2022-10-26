export const options = {
  form: {
    required: 1,
    nonRequired: 0,
  },

  pageSize: 10,

  codeAuth: 6,

  paginationLimit: 2,
};

export const DOT = "...";
const firstPage = 1;

const Range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const paginationPageCalculator = (total, current) => {
  const totalPage = Math.ceil(total / options.pageSize);

  const stepPage = options.paginationLimit - 1;

  if (firstPage + options.paginationLimit >= totalPage)
    return Range(1, totalPage);

  const leftPage = Math.max(current - options.paginationLimit, 1);
  const rightPage = Math.min(current + options.paginationLimit, totalPage);

  const isShowDotLeft = leftPage > stepPage;
  const isShowDotRight = rightPage <= totalPage - stepPage;

  if (!isShowDotLeft && isShowDotRight) {
    const firstRange = Range(1, firstPage + options.paginationLimit + 1);
    return [...firstRange, DOT, totalPage];
  }
  if (isShowDotLeft && !isShowDotRight) {
    const endRange = Range(totalPage - options.paginationLimit - 1, totalPage);
    return [firstPage, DOT, ...endRange];
  }

  // if (isShowDotLeft && isShowDotLeft) {
  //   const middleRange = Range(leftPage + 1, rightPage - 1);
  //   return [firstPage, DOT, ...middleRange, DOT, totalPage];
  // }
  if (isShowDotLeft && isShowDotLeft) {
    const middleRange = Range(leftPage + 1, rightPage - 1);
    let cloneMiddleRange = [...middleRange];
    return [firstPage, DOT, current, DOT, totalPage];
  }
};

export default paginationPageCalculator;
