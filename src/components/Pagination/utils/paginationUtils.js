import _ from "lodash";

export const returnPaginationRange = (totalPage, page, siblings) => {
    const totalPageNoInArray = 5 * siblings;
    if (totalPageNoInArray >= totalPage) {
        return _.range(1, totalPage + 1);
    }

    const leftSiblingsIndex = Math.max(page - siblings, 1);
    const rightSiblingsIndex = Math.min(page + siblings, totalPage);
    const showLeftDots = leftSiblingsIndex > 2;
    const showRightDots = rightSiblingsIndex < totalPage - 2;

    if (!showLeftDots && showRightDots) {
        const leftItemsCount = 2 + 2 * siblings;
        const leftRange = _.range(1, leftItemsCount + 1);
        return [...leftRange, "...", totalPage];
    } else if (showLeftDots && !showRightDots) {
        const rightItemsCount = 2 + 2 * siblings;
        const rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
        return [1, "...", ...rightRange];
    } else {
        const middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
        return [1, "...", ...middleRange, "...", totalPage];
    }
}