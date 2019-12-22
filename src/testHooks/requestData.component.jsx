import React, { Suspense } from "react";
import useRequest from "../requests/useRequest.component";

const RequestDataHook = () => {
  const idUser = 1;
  const user = useRequest(
    `https://jsonplaceholder.typicode.com/users?id=${idUser}`
  );
  return (
    <div style={{ height: "200px", border: "solid 1px blue" }}>
      <p>result = {JSON.stringify(user)} </p>
      <p style={{ background: "grey", color: "white" }}>
        <Suspense fallback={<div>LOADING....</div>}>
          {user ? <p> atualName : {user.name}</p> : <p>User not found</p>}
        </Suspense>
      </p>
      <input
        type="search"
        value={user}
        // onChange={event => setSearchQuery(event.target.value)}
      />
      <button type="button"> Get </button>
    </div>
  );
};

export default RequestDataHook;
