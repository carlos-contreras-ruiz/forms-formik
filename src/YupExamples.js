import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Input } from "./componentsCalculator/Input";
import {
  Container,
  Section,
  CustomButton,
  Balance,
} from "./componentsCalculator/StyledComponents";

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1);
  }
  return Math.round(total);
};
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function App() {
  const [balance, setBalance] = useState("");

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate)
    );
    console.log(val);
    setBalance(formatter.format(val));
  };

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: "",
            contribution: "",
            years: "",
            rate: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number()
              .required("Obligatorio")
              .typeError("This must be a number"),
            contribution: Yup.number()
              .required("Obligatorio c")
              .typeError("This must be a number"),
            years: Yup.number()
              .required("Obligatorio y")
              .typeError("This must be a number"),
            rate: Yup.number()
              .required("Obligatorio r")
              .typeError("This must be a number")
              .min(0, "Debe ser mayor a uno")
              .max(1, "debe ser menor a uno"),
          })}
        >
          <Form>
            <Input name="deposit" label="Deposito Inicial" />
            <Input name="contribution" label="Contribucion anual" />
            <Input name="years" label="Años" />
            <Input name="rate" label="Interes estimado" />
            <CustomButton type="submit">Calcular</CustomButton>
          </Form>
        </Formik>
        {balance !== "" ? <Balance>Balance final: {balance}</Balance> : null}
      </Section>
    </Container>
  );
}

export default App;
