import React, { useState } from "react";

interface UserInfoProps {}

const UserInfo: React.FC<UserInfoProps> = () => {
  const userPhoto =
    "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
  const name = "M4gn3tic";
  const mood = "szczesliwy";
  const confirm = React.useCallback(() => {}, []);
  const back = React.useCallback(() => {}, []);
  return (
    <>
      <div className="UserInfo">
        <text className="title"> {name}</text>
        {userPhoto && <img width="200px" height="200px" src={userPhoto} />}
        <text className="content">
          Witaj {name} twój nastrój został zidentyfikowany jako {mood}, naciśnij
          "Przejdź" aby zobaczyć jakie propozycje filmów przygotowaliśmy dla
          Ciebie
        </text>
        <div className="buttonsRow">
          <button className="margin">
            <text onClick={back}>Wróć</text>
          </button>
          <button className="margin">
            <text onClick={confirm}>Przejdź</text>
          </button>
        </div>
      </div>
    </>
  );
};
export default UserInfo;
