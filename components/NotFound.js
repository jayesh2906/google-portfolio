import Image from "next/image";
import { NotFoundContainer } from "../styles/Home.styled";

const NotFound = ({ setSearchValue }) => {
  return (
    <NotFoundContainer>
      <div>
        <Image
          src="/assets/notResultFound.png"
          alt="no search found"
          width={438}
          height={363}
          style={{
            zIndex: "-1",
          }}
        />
        <p>
          Please search as "Jayesh Choudhary" or{" "}
          <a
            onClick={() => {
              setSearchValue("Jayesh Choudhary");
            }}
          >
            Click here.
          </a>
        </p>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;
