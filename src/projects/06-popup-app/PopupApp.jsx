import React, { useEffect, useState } from "react";
import Popup from "../../components/Popup.component";
import Text from "../../components/Text";
import Button from "../../components/Button";

export default function PopupApp() {
  const [triggered, setTriggered] = useState(false);
  const [timerTrigger, setTimerTrigger] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTriggered(true);
    }, 3000);
    setTimeout(() => setTimerTrigger(true), 8000);
  }, []);
  return (
    <div className="wrapper">
      <Text title={"Magic Popup App"} />
      <Button />
      <Popup
        type={"#DC851F"}
        triggerCheck={triggered}
        handleClose={setTriggered}
      />
      <Popup
        type={"#00b4d8"}
        triggerCheck={timerTrigger}
        handleClose={setTimerTrigger}
      />
    </div>
  );
}
