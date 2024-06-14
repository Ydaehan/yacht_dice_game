import { useEffect, useState } from "react";
import DiceObject from "./DiceObject";
import Count from "../Count/Count";
import Score from "../Score/Score";

const Dice = () => {
  var cwidth = 400;
  var cheight = 300;
  var dicex = 0;
  var dicey = 0;
  var diceWidth = 150;
  var diceHeight = 150;
  var dotrad = 6;
  var ctx;

  const [diceValue, setDiceValues] = useState(Array(5).fill(1));
  const [diceLocked, setDiceLocked] = useState(Array(5).fill(false));
  const [myDice, setMyDice] = useState([]);
  const [myTurn, setMyTurn] = useState(1);
  const [limit, setLimit] = useState(13);

  // 모든 주사위를 고정하면 다시 굴리기 버튼 비활성화
  useEffect(() => {
    if (diceLocked.every((value) => value === true)) {
      document.querySelector(".rollBtn").disabled = true;
    } else {
      document.querySelector(".rollBtn").disabled = false;
    }
    if (myTurn === 3) {
      document.querySelector(".rollBtn").disabled = true;
    }
  });

  const init = () => {
    let newDiceValues = [...diceValue];
    for (let i = 0; i < 5; i++) {
      const diceCanvas = document.getElementById(`diceCanvas${i}`);
      ctx = diceCanvas.getContext("2d");
      ctx.clearRect(0, 0, cwidth, cheight);
      // 선택한 주사위를 제외하고 굴리기

      if (!diceLocked[i]) {
        const value = Math.floor(Math.random() * 6) + 1;
        newDiceValues[i] = value;
      }

      console.log(newDiceValues[i]);
      drawFace(newDiceValues[i], ctx);
    }
    // 주사위의 상태를 업데이트
    setDiceValues(newDiceValues);
  };

  useEffect(() => {
    init();
  }, []); // 빈 배열을 전달하면 컴포넌트가 처음 마운트 될 때만 실행

  const drawFace = (diceValue, dice) => {
    ctx = dice;
    ctx.lineWidth = 5;
    ctx.clearRect(dicex, dicey, diceWidth, diceHeight);
    ctx.strokeRect(dicex, dicey, diceWidth, diceHeight);
    ctx.fillStyle = "#009966";
    switch (diceValue) {
      case 1:
        draw1();
        break;
      case 2:
        draw2();
        break;
      case 3:
        draw2();
        draw1();
        break;
      case 4:
        draw4();
        break;
      case 5:
        draw4();
        draw1();
        break;
      case 6:
        draw4();
        draw2mid();
        break;
    }
  };

  const draw1 = () => {
    var dotx;
    var doty;

    ctx.beginPath();

    dotx = dicex + 0.5 * diceWidth;
    doty = dicey + 0.5 * diceHeight;
    ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);

    ctx.closePath();
    ctx.fill();
  };

  const draw2 = () => {
    var dotx;
    var doty;

    ctx.beginPath();

    dotx = dicex + 3 * dotrad;
    doty = dicey + 3 * dotrad;
    ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);

    dotx = dicex + diceWidth - 3 * dotrad;
    doty = dicey + diceHeight - 3 * dotrad;
    ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);

    ctx.closePath();
    ctx.fill();
  };

  const draw4 = () => {
    var dotx;
    var doty;

    ctx.beginPath();

    dotx = dicex + 3 * dotrad;
    doty = dicey + 3 * dotrad;
    ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);

    dotx = dicex + diceWidth - 3 * dotrad;
    doty = dicey + diceHeight - 3 * dotrad;
    ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);

    ctx.closePath();
    ctx.fill();
    ctx.beginPath();

    dotx = dicex + 3 * dotrad;
    doty = dicey + diceHeight - 3 * dotrad;
    ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);

    dotx = dicex + diceWidth - 3 * dotrad;
    doty = dicey + 3 * dotrad;
    ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);

    ctx.closePath();
    ctx.fill();
  };

  const draw2mid = () => {
    var dotx;
    var doty;

    ctx.beginPath();

    dotx = dicex + 3 * dotrad;
    doty = dicey + 0.5 * diceHeight;
    ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);

    dotx = dicex + diceWidth - 3 * dotrad;
    doty = dicey + 0.5 * diceHeight;
    ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);

    ctx.closePath();
    ctx.fill();
  };

  const throwDices = () => {
    let newDiceValues = [...diceValue];
    if (myTurn < 3) {
      for (let i = 0; i < 5; i++) {
        const diceCanvas = document.getElementById(`diceCanvas${i}`);
        ctx = diceCanvas.getContext("2d");
        ctx.clearRect(0, 0, cwidth, cheight);
        // 선택한 주사위를 제외하고 굴리기

        if (!diceLocked[i]) {
          const value = Math.floor(Math.random() * 6) + 1;
          newDiceValues[i] = value;
        }

        console.log(newDiceValues[i]);
        drawFace(newDiceValues[i], ctx);
      }
      // 주사위의 상태를 업데이트
      setDiceValues(newDiceValues);
      setMyTurn(myTurn + 1);
    } else {
      alert("더 이상 주사위를 굴릴 수 없습니다.");
    }
  };

  // 주사위를 고정하는 함수
  const toggleDiceLock = (index) => {
    let newDiceLocked = [...diceLocked];
    let value = [...myDice];
    newDiceLocked[index] = !newDiceLocked[index];
    if (newDiceLocked[index] === true) {
      value[index] = diceValue[index];
      setMyDice(value);
      console.log("value: ", value[index]);
    }
    console.log(myDice);
    setDiceLocked(newDiceLocked);
    // 주사위의 고정을 풀면 setMyDice를 이용해 myDice 배열에서 해당 주사위의 값을 제거
    if (newDiceLocked[index] === false) {
      value[index] = 0;
      setMyDice(value);
    }
  };

  return (
    <>
      <div
        className="dice"
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <DiceObject
              key={index}
              index={index}
              toggleDiceLock={toggleDiceLock}
              active={diceLocked[index]}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <button className="rollBtn" onClick={throwDices}>
            다시 굴리기
          </button>
        </div>
        <div>
          <Count count={myTurn} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          남은 턴 : {limit}
        </div>
        <div>Score</div>
        <Score
          diceValue={diceValue}
          limit={limit}
          setLimit={setLimit}
          init={init}
          setMyTurn={setMyTurn}
        />
      </div>
    </>
  );
};

export default Dice;
