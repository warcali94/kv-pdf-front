import { lazy } from "react";
import * as Paths from "./paths.js";

const formPDFreport = lazy(() => import("../components/PDFForm/index"));

export default [
  {
    title: "PDF Form pet data",
    path: Paths.PDF_REPORT,
    component: formPDFreport,
  },
];
