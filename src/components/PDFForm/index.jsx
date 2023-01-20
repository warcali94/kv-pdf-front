import { Button, Form, Input } from "antd";
import axios from "axios";
import { useContext, useRef } from "react";
import { PDF_REPORT } from "../../routing/paths";
import { AppContext } from "../Provider";
import { form } from "../utils/formAttributes";
export default () => {
  const [petData, setPetData] = useContext(AppContext);
  const name = useRef(null);
  const weight = useRef(null);
  const age = useRef(null);

  // Sending data to backend
  const URL_API = `http://localhost:8080${PDF_REPORT}`;
  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPetData({ ...petData,  });

  //   console.log("EVENTO", petData);
  // };
  const request = {
    method: "PUT",
    Headers: { "Content-Type": "aplication/json" },
    params: petData,
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(e);
    axios.put(URL_API, petData, request);
  };

  return (
    <Form className="form" {...form}>
      <Form.Item className="item" name={"name"} label={"Mascota"}>
        <Input
          type="text"
          ref={name}
          onChange={
            (e) => setPetData({ ...petData, name: name.current.input.value })
            // handleChange(e)
          }
        />
      </Form.Item>
      <Form.Item className="item" name={"weight"} label={"Peso"}>
        <Input
          type="text"
          ref={weight}
          onChange={
            () => setPetData({ ...petData, weight: weight.current.input.value })
            // handleChange()
          }
        />
      </Form.Item>
      <Form.Item className="item" name={"age"} label={"Edad"}>
        <Input
          type="text"
          ref={age}
          onChange={
            () => setPetData({ ...petData, age: age.current.input.value })
            // handleChange()
          }
        />
      </Form.Item>
      <Form.Item className="item-button">
        <Button
          className="button"
          type="primary"
          htmlType="submit"
          onClick={(e) => submitForm(e)}
        >
          Guardar
        </Button>
      </Form.Item>
    </Form>
  );
};
