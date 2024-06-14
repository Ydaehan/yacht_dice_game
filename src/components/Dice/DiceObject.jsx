const DiceObject = (props) => {
  const { index, toggleDiceLock, active } = props;

  const diceClick = (index) => {
    toggleDiceLock(index);
  };

  return (
    <>
      <canvas
        className={`diceCanvas ${active ? "active" : ""}`}
        id={`diceCanvas${index}`}
        width="150"
        height="150"
        onClick={() => diceClick(index)}
      >
        Your browser does not support the HTML5 canvas tag.
      </canvas>
    </>
  );
};

export default DiceObject;
