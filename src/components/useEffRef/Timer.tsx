import { useEffect, useRef, useState } from "react";

const Timer = (props: TimeProps) => {
  // states
  const [seconds, setSeconds] = useState(0);
  //setInterval recibe dato tipado tras la dependecias > NodeJS.Timeout
  const refInterval = useRef<NodeJS.Timeout>();
  // console.log(refInterval);

  useEffect(() => {
    // console.log(refInterval.current);

    if (refInterval.current) {
      clearInterval(refInterval.current);
    }

    refInterval.current = setInterval(
      () => setSeconds((seconds) => seconds + 1),
      props.milliseconds
    );
  }, [props.milliseconds]);

  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};
type TimeProps = {
  milliseconds: number;
};
export default Timer;
