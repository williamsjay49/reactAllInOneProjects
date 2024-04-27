import { useState, useEffect } from "react";
import Button from "../components/Button";
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from "react-icons/bs";

let body = document.body.style;
export default function DialogueBox() {
  const [subscription, setSubscription] = useState({
    subscribe: null,
    title: "Hello",
    body: "Would you like to subscribe?",
    justifyContent: "space-between",
  });

  const [icon, setIcon] = useState();
  let iconStyle = {
    fontSize: "80px",
    justifySelf: "center",
    color:
      subscription.state === "subscribed"
        ? "rgba(59,137,90,0.4)"
        : "rgba(25,118,160,0.4)",
  };
  useEffect(() => {
    if (subscription.subscribe === "subscribe") {
      setIcon(<BsFillEmojiSmileFill style={iconStyle} />);
      body.background = "#ffafcc";
    }
    if (subscription.subscribe === "unsubscribe") {
      setIcon(<BsFillEmojiFrownFill style={iconStyle} />);
      body.background = "#a2d2ff";
    }
  }, [subscription.subscribe]);

  return (
    <div
      style={{
        marginTop: "50px",
        width: "400px",
        height: "15rem",
        backgroundColor: "#edede9",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 30,
        }}
      >
        <section>
          <h1 className="h3" style={{ margin: 0, padding: 0 }}>
            {subscription.title}
          </h1>
          <h2 className="h6" style={{ fontWeight: "400" }}>
            {subscription.body}
          </h2>
        </section>
        <div>{icon}</div>
      </div>
      <div
        style={{
          height: "55%",
          margin: "0",
          padding: "0",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: `${subscription.justifyContent}`,
        }}
      >
        {subscription.subscribe === null && <Button title={"Cancel"} />}
        {subscription.subscribe === "subscribe" ? null : (
          <Button
            title={"Subscribe"}
            onClick={() =>
              setSubscription((a) => ({
                ...a,
                subscribe: "subscribe",
                title: "Thank You,",
                body: "for your subscription :)",
                justifyContent: "flex-end",
              }))
            }
          />
        )}

        {subscription.subscribe === "subscribe" ? (
          <Button
            title={"unsubscribe"}
            onClick={() =>
              setSubscription((a) => ({
                ...a,
                subscribe: "unsubscribe",
                title: "Sorry",
                body: "to see you go :(",
                justifyContent: "flex-end",
              }))
            }
          />
        ) : null}
      </div>
    </div>
  );
}
