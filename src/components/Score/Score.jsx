import ScoreRaw from "./ScoreRaw/ScoreRaw";
import ScoreSum from "./ScoreSum/ScoreSum";
import styles from "./Score.module.css";
import { useState } from "react";
const Score = (props) => {
  const { diceValue, limit, setLimit, init, setMyTurn } = props;

  const [minorSum, setMinorSum] = useState(0);
  const [majorSum, setMajorSum] = useState(0);
  const [myScoreArr, setMyScoreArr] = useState(Array(13).fill(0));

  return (
    <div>
      <div className={styles.scoreBoard}>
        <table>
          <tbody>
            <ScoreRaw
              name="one"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
            <ScoreRaw
              name="two"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
            <ScoreRaw
              name="three"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
            <ScoreRaw
              name="four"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
            <ScoreRaw
              name="five"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
            <ScoreRaw
              name="six"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
            <ScoreSum minorSum={minorSum} />
          </tbody>
        </table>
        <table>
          <tbody>
            <ScoreRaw
              name="three of a kind"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
            <ScoreRaw
              name="four of a kind"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
            <ScoreRaw
              name="full house"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
            <ScoreRaw
              name="small straight"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
            <ScoreRaw
              name="large straight"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
            <ScoreRaw
              name="yacht"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
            <ScoreRaw
              name="chance"
              diceValue={diceValue}
              setMajorSum={setMajorSum}
              setMinorSum={setMinorSum}
              setLimit={setLimit}
              init={init}
              setMyScoreArr={setMyScoreArr}
              setMyTurn={setMyTurn}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Score;
