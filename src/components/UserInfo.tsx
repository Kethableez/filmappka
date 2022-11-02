import React, { useState } from "react";
import FilmSlider from "./FilmSlider";

interface UserInfoProps {}

const UserInfo: React.FC<UserInfoProps> = ({}) => {
  const [Confirmed, isConfirmed] = useState(true);
  return (
    <>
      {!Confirmed && (
        <div className="UserInfo">
          <text className="title"> Imię Nazwisko</text>
          <text className="content">Witaj uytkowniku xyz.</text>
          <button>
            {/* onClick={setIsLogged(true)} */}
            <text>Przejdź</text>
          </button>
        </div>
      )}
      {Confirmed && (
        <>
          <div className="movies">
            <FilmSlider />
          </div>
        </>
      )}
    </>
  );
};
export default UserInfo;
