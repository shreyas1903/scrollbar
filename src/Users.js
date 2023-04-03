import React from "react";

function Users() {
  const data = [
    { name: "john", id: 1 },
    { name: "mark", id: 2 },
    { name: "joe", id: 3 },
    { name: "john", id: 4 },
    { name: "mark", id: 5 },
    { name: "joe", id: 6 },
    { name: "john", id: 7 },
    { name: "mark", id: 8 },
    { name: "joe", id: 9 },
    { name: "john", id: 10 },
    { name: "john", id: 11 },
    { name: "mark", id: 12 },
    { name: "joe", id: 13 },
    { name: "john", id: 14 },
    { name: "mark", id: 15 },
    { name: "joe", id: 16 },
    { name: "john", id: 17 },
    { name: "mark", id: 18 },
    { name: "joe", id: 19 },
    { name: "john", id: 20 },
    { name: "john", id: 21 },
    { name: "mark", id: 22 },
    { name: "joe", id: 23 },
    { name: "john", id: 24 },
    { name: "mark", id: 25 },
    { name: "joe", id: 26 },
    { name: "john", id: 27 },
    { name: "mark", id: 28 },
    { name: "joe", id: 29 },
    { name: "john", id: 30 },
    { name: "john", id: 31 },
    { name: "mark", id: 32 },
    { name: "joe", id: 33 },
    { name: "john", id: 34 },
    { name: "mark", id: 35 },
    { name: "joe", id: 36 },
    { name: "john", id: 37 },
    { name: "mark", id: 38 },
    { name: "joe", id: 39 },
    { name: "john", id: 40 },
  ];
  return (
    <div>
      {data.map((Users) => (
        <div>{Users.name}</div>
      ))}
    </div>
  );
}

export default Users;
