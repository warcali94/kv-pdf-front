import { useState, useContext } from "react";
import "./App.scss";
import PDFForm from "./PDFForm/index";
import updatepdf from "../apicall/updatepdf";
import Provider from "./Provider";
function App() {
  // const [data, setData] = con(0);
  // console.log("CONTEXT", useContext());
  return (
    <>
      <Provider>
        <PDFForm></PDFForm>
      </Provider>
    </>
  );
}

export default App;
