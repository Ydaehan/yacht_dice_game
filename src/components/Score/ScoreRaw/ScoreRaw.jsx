import { useState } from "react";
import styles from "./ScoreRaw.module.css";
const ScoreRaw = (props) => {
  const {
    name,
    diceValue,
    setMajorSum,
    setMinorSum,
    setLimit,
    init,
    setMyScoreArr,
    setMyTurn,
  } = props;
  const [disabled, setDisabled] = useState(false);

  const diceSort = () => {
    const arr = diceValue.slice();
    const sorted = arr.sort();
    return sorted;
  };

  const scoreCount = () => {
    const dice = rule();
    const score = dice.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return score;
  };

  const rule = () => {
    const dice = diceSort();
    console.log(dice);
    switch (name) {
      case "one":
        return dice.filter((num) => num === 1);
      case "two":
        return dice.filter((num) => num === 2);

      case "three":
        return dice.filter((num) => num === 3);

      case "four":
        return dice.filter((num) => num === 4);
      case "five":
        return dice.filter((num) => num === 5);
      case "six":
        return dice.filter((num) => num === 6);
      case "three of a kind":
        // 3개가 같은 경우
        for (let i = 0; i < 3; i++) {
          if (dice[i] === dice[i + 1] && dice[i] === dice[i + 2]) {
            return dice;
          }
        }
        return [0];
      case "four of a kind":
        // 4개가 같은 경우
        for (let i = 0; i < 2; i++) {
          if (
            dice[i] === dice[i + 1] &&
            dice[i] === dice[i + 2] &&
            dice[i] === dice[i + 3]
          ) {
            return dice;
          }
        }
        return [0];
      case "full house":
        // 3개와 2개가 같은 경우
        if (dice[0] === dice[1] && dice[0] === dice[2] && dice[3] === dice[4]) {
          return [25];
        }
        return [0];
      case "small straight":
        // 4개가 연속인 경우
        if (
          dice[0] === dice[1] - 1 &&
          dice[1] === dice[2] - 1 &&
          dice[2] === dice[3] - 1
        ) {
          return [30];
        }
        if (
          dice[1] === dice[2] - 1 &&
          dice[2] === dice[3] - 1 &&
          dice[3] === dice[4] - 1
        ) {
          return [30];
        }
        return [0];
      case "large straight":
        // 5개가 연속인 경우
        if (
          dice[0] === dice[1] - 1 &&
          dice[1] === dice[2] - 1 &&
          dice[2] === dice[3] - 1 &&
          dice[3] === dice[4] - 1
        ) {
          return [40];
        }
        return [0];
      case "yacht":
        // 5개가 같은 경우
        if (
          dice[0] === dice[1] &&
          dice[0] === dice[2] &&
          dice[0] === dice[3] &&
          dice[0] === dice[4]
        ) {
          return [50];
        }
        return [0];
      default:
        return dice;
    }
  };

  const getScoreStyle = () => {
    if (scoreCount() > 0) {
      return true;
    } else {
      return false;
    }
  };

  const inputScore = () => {
    // one ~ six 는 minorSum에 더해주고
    // three of a kind ~ yacht,chance 는 majorSum에 더해주어야 한다
    if (disabled) {
      alert("이미 점수를 입력하셨습니다.");
      return;
    }
    if (
      name === "one" ||
      name === "two" ||
      name === "three" ||
      name === "four" ||
      name === "five" ||
      name === "six"
    ) {
      setMinorSum((prev) => prev + scoreCount());
    } else {
      setMajorSum((prev) => prev + scoreCount());
    }
    // 점수를 입력하면 주사위를 다시 굴릴 수 있도록 초기화하고
    // 턴 넘기고
    // 점수를 입력한 항목은 비활성화 하고 숫자 고정
    setMyScoreArr((prev) => [...prev, { name, score: scoreCount() }]);
    setDisabled(true);
    setLimit((prev) => prev - 1);
    init();
    setMyTurn(1);
  };

  return (
    <>
      <tr>
        <td className={styles.scoreTitle}>{name}</td>
        <td
          className={
            getScoreStyle() ? styles.scoreDataSelected : styles.scoreData
          }
          onClick={inputScore}
        >
          {scoreCount()}
        </td>
      </tr>
    </>
  );
};

export default ScoreRaw;
