import Head from "next/head";
import { StyledButton } from "../styles/home.styled";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="This is Jayesh's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome Jayesh</h1>
        <StyledButton>button bro..</StyledButton>
      </main>
    </div>
  );
}
