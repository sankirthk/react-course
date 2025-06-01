export type authorObj = {
  id: number;
  authorName: string;
  authorLink: string;
};

export const Authors: authorObj[] = [
  {
    id: 1,
    authorName: "Mel Robbins",
    authorLink:
      "https://www.amazon.com/Mel-Robbins/e/B004SWIOHW/ref=dp_byline_cont_book_1",
  },

  {
    id: 2,
    authorName: "Sawyer Robbins",
    authorLink:
      "https://www.amazon.com/Sawyer-Robbins/e/B0F74NKRTW/ref=dp_byline_cont_book_2",
  },

  {
    id: 3,
    authorName: "Dr. Suess",
    authorLink:
      "https://www.amazon.com/Dr-Seuss/e/B000AP8MY6?ref=bsf_qv_ov_prnt_ap_rw",
  },
];

