import styles from "./ScoreSum.module.css";
const ScoreSum = (props) => {
  const { minorSum } = props;
  return (
    <>
      <tr>
        <td className={styles.scoreTitle}>scoreSum</td>
        <td className={styles.scoreSum}> {minorSum} / 63 </td>
      </tr>
    </>
  );
};

export default ScoreSum;
