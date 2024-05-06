import Text from "../components/Text.js";
import Button from "../components/Button.jsx";
import { useRef, useEffect, useState } from "react";

export default function RegForm() {
  let inputUser = useRef(null);
  let inputEmail = useRef(null);
  let inputPass = useRef(null);

  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    inputUser.current.focus();
  }, []);
  return (
    <>
      {valid ? (
        <Text title={`Welcome ${value.username}`} />
      ) : (
        <div
          className="wrapper"
          style={{
            width: "400px",
            height: "500px",
            border: "1px solid black",

            padding: "2rem 1.5rem",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!value.username) {
                inputUser.current.focus();
              } else if (!value.email) {
                inputEmail.current.focus();
              } else if (!value.password) {
                inputPass.current.focus();
              }

              if (value.username && value.email && value.password)
                setValid(true);
              setSubmit(true);
            }}
            style={{
              display: "grid",
              gridTemplateRows: "repeat(5, 1fr)",
              gap: ".5rem",
            }}
          >
            <Text title={"Registration"} />

            <div style={{ textAlign: "left" }}>
              <input
                ref={inputUser}
                type="text"
                placeholder="enter your username"
                value={value.username}
                onChange={(e) => {
                  setValue({ ...value, username: e.target.value });
                }}
              />
              {submit && !value.username ? (
                <label>Please enter your username</label>
              ) : null}
            </div>
            <div style={{ textAlign: "left" }}>
              <input
                ref={inputEmail}
                type="email"
                placeholder="enter your email"
                value={value.email}
                onChange={(e) => {
                  setValue({ ...value, email: e.target.value });
                }}
              />
              {submit && !value.email ? (
                <label>Please enter your email</label>
              ) : null}
            </div>
            <div style={{ textAlign: "left" }}>
              <input
                ref={inputPass}
                type="password"
                placeholder="enter your password"
                value={value.password}
                onChange={(e) => {
                  setValue({ ...value, password: e.target.value });
                }}
              />
              {submit && !value.password ? (
                <label>Please enter your password</label>
              ) : null}
            </div>
            <Button title={"Register"} />
          </form>
        </div>
      )}
    </>
  );
}
