export function Contact({ contact, width = "300px" }) {
  return (
    <div
      style={{
        width: width,
        border: "1px solid black",
        borderRadius: "10px",
        overflow: "hidden",
      }}
      key={contact.id}
    >
      <div style={{ backgroundColor: "red", border: "1px solid red" }}>
        <h1 className="h5">{contact.first_name}</h1>
      </div>
      <p>{contact.last_name}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.username}</p>
    </div>
  );
}

// "first_name": "Rochella",
// "last_name": "Ivison",
// "email": "rivison0@google.com.au",
// "phone": "673-235-4191",
// "user_name": "rivison0"
