interface RatingData {
  counts: {
    [rating: number]: number;
  };
}

export const useRating = (ratingData: RatingData) => {
  const total = Object.values(ratingData.counts).reduce((pre, cur) => pre + cur, 0);

  const expected: { [level: number]: number } = {};
  for (const level in ratingData.counts) {
    expected[level] = (ratingData.counts[level] + 1) / (total + 5);
  }

  return expected;
};
