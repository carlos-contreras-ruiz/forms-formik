import styled, { keyframes } from "styled-components";

function App() {
  return (
    <div>
      <Content>
        <P>Hola soy un parrafo</P>
        <Button>Enviar</Button>
        <Button primary={true}>Enviar</Button>
        <Button primary={true} className="secondary">
          Secondary
        </Button>
        <Button primary={true} className="secondary">
          <p className="info">Info</p>
          Secondary
        </Button>
        <BlockButton>Bloque</BlockButton>
        <BlockButton primary as="a" href="#">
          Bloque
        </BlockButton>
        <StyledLink>Styled link</StyledLink>
        <Input color="blue" />
        <Password color="purple" />
        <Rotar>Estoy girando</Rotar>
      </Content>
    </div>
  );
}

const girar = keyframes`
from{
  transform: rotate(0deg)
}
to{
  transform:rotate(360deg)
}
`;

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`;

const P = styled.p`
  font-size: 24px;
  color: red;
`;

const Content = styled.div`
  padding: 20px 25px;
`;

//con el & el estilo se aplica a el propio componente
//Sin el & el estilo se aplica a las clases de los hijos
const Button = styled.button`
  transition: box-shadow 0.5s ease;
  background-color: ${(props) => (props.primary ? "red" : "white")};
  color: ${(props) => (props.primary ? "white" : "red")};
  border: solid 2px red;
  border-radius: 4px;
  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
    //margin: 15px;
  }
  &.secondary {
    background-color: blue;
  }
  .info {
    font-size: 28px;
  }
`;

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`;

const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>;
};

const Input = styled.input.attrs((props) => ({
  type: "text",
  colorCustom: props.color || "yellow",
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${(props) => props.colorCustom};
`;

const Password = styled(Input).attrs({
  type: "password",
})``;

const StyledLink = styled(Link)`
  color: purple;
`;

export default App;
