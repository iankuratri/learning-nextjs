import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title2 = styled.h2`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

function CssInJs() {
  return (
    <div>
      <h2 style={{ color: "red" }}>CSS In JS Page</h2>

      <Title2>Styled Title 2</Title2>

      {/* Use Title and Wrapper like any other React component – except they're styled! */}
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </div>
  );
}

export default CssInJs;
