type dataType = {
  label: String;
  state: String;
  key: number;
  check: boolean;
};

export const data: Array<dataType> = [
  {
    label: "밥 먹기",
    state: "active",
    key: 0,
    check: false,
  },
  {
    label: "양치하기",
    state: "active",
    key: 1,
    check: false,
  },
  {
    label: "세수하기",
    state: "active",
    key: 2,
    check: false,
  },
];
