import TitleDesc from "../components/TitleDesc";
import { StyledButton } from "../styles/Home.styled";

export default function Home() {
  return (
    <div>
      <TitleDesc
        title="Jayesh's Portfolio"
        desc="This is Google theme portfolio created by Jayesh choudhary using Nextjs Framework."
      />
      <main>
        <h1>Welcome Jayesh</h1>
        TypeScript is a strongly typed programming language that builds on
        JavaScript, giving you better tooling at any scale. Try TypeScript Now.
        Online or via npm.
        <StyledButton>button</StyledButton>
      </main>
    </div>
  );
}
