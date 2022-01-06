export default function makeNickname() {
  const first = ["", "어둠의 인도자", "망각의", "이글이글"];
  const second = [
    "뿔보",
    "유령이",
    "짹짹이",
    "깃털기사",
    "두더지 광부",
    "룬정령",
    "살랑꼬리",
    "수호대장",
    "첨벙둥이",
    "꿀렁이",
    "라라",
    "말랑이",
    "멜리스마",
    "오시아",
    "키키",
    "돌돌이",
    "총총이",
    "톡톡이",
    "별고래",
    "어둠전사",
    "징징이",
    "방울이",
    "번쩍이",
    "팔랑이",
    "배불뚝이",
    "아오 신",
    "크롱이",
    "날쌘발",
    "으르렁이",
    "퐁당이",
  ];
  const third = ["1성", "2성", "3성"];

  const getRandomIdx = (array: string[]) => {
    return Math.floor(Math.random() * array.length);
  };

  const ret =
    first[getRandomIdx(first)] +
    " " +
    second[getRandomIdx(second)] +
    " " +
    third[getRandomIdx(third)];

  return ret.trim();
}
