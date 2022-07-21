import Image from "next/image";
import { useContext } from "react";
import { SearchContext } from "../layout/Layout";
import { NotFoundContainer } from "../styles/Home.styled";

const NotFound = () => {
  const { handleClickHere } = useContext(SearchContext);

  return (
    <NotFoundContainer>
      <div>
        <Image
          src="/assets/notResultFound.png"
          alt="no search found"
          width={300}
          height={250}
          style={{
            zIndex: "-1",
          }}
        />
        <p>
          {`Please search as "Jayesh Choudhary" or `}
          <a onClick={handleClickHere}>Click here.</a>
        </p>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;
