export type Reviews = {
    comment: string,
    date: string,
    id: number,
    rating: number,
    user: {
     id: number
     name: string
    },
};

export type addReviewData = {
  comment: string;
  rating: number;
};

export type errorReviewData = {
  error: string;
};
