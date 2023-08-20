import React from "react";
import ReactDOM from "react-dom";
//imp pages to be multi-pages
import Home from "./Pages/Home";
import TranslationTrAr from "./Pages/TranslationTrAr";
import Subtitling from "./Pages/Subtitling";
import Transcription from "./Pages/Transcription";
import TranslationEnAr from "./Pages/TranslationEnAr";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: "Sorry but not sorry",
  },
  {
    path: "TranslationTrAr",
    element: <TranslationTrAr />,
  },
  {
    path: "Subtitling",
    element: <Subtitling />,
  },
  {
    path: "Transcription",
    element: <Transcription />,
  },
  {
    path: "TranslationEnAr",
    element: <TranslationEnAr />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
