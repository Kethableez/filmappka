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
            <div className="movieInfo"> </div>
            <text> title</text>
            <text> rating</text>
            <text>
              description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Officia commodi dicta labore magni quo id eligendi!
              Excepturi quo voluptatem quaerat ea, tenetur quibusdam commodi
              ratione, eveniet iure eaque soluta iusto! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Inventore sapiente ducimus
              incidunt assumenda modi recusandae hic, ex similique alias
              distinctio ipsam vel. Tenetur, consectetur exercitationem
              reiciendis aliquid cumque qui nesciunt. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cum aspernatur odio est nemo odit
              ducimus, nihil praesentium labore debitis enim quidem consectetur
              sequi ipsam quis vitae eius! Nam, totam esse? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Quis laudantium corporis
              sapiente modi minus quibusdam ipsam nemo provident! Corporis
              nostrum, animi odio rem hic id maxime laborum pariatur officia
              voluptatem?
            </text>
          </div>
        </>
      )}
    </>
  );
};
export default UserInfo;
