import react, { useEffect, useState, useRef } from "react";
import Title from "../components/Text";
import Contacts from "./72 - Data.json";
import { Contact } from "./Contact";

export default function FilterContactsApp() {
  const [searchItem, setSearchItem] = useState("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  let inputStyle = {
    width: "60%",
    height: "3rem",
    padding: "1rem 1rem",
    fontSize: "1rem",
  };
  const inputRef = useRef(null);
  return (
    <div className="wrapper">
      <Title title={"Filter Contact"} />
      <input
        style={inputStyle}
        type="text"
        ref={inputRef}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <section
        style={{
          width: "100%",
          marginTop: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        {Contacts.filter((contact) => {
          if (searchItem === "") {
            return contact;
          } else if (
            contact.first_name
              .toLocaleLowerCase()
              .includes(searchItem.toLocaleLowerCase())
          ) {
            return contact;
          }
        }).map((contact) => (
          <Contact contact={contact} />
        ))}
      </section>
    </div>
  );
}
