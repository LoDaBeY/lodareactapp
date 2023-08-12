import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../Pages/Home'
import Translation from '../Pages/Translation'
import Subtitling from '../Pages/Subtitling'
import Transcription from '../Pages/Transcription'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement : 'Sorry but not sorry'
  },
  {
    path: "Translation",
    element: <Translation/>,
  },
  {
    path: "Subtitling",
    element: <Subtitling/>,
  },
  {
    path: "Transcription",
    element: <Transcription/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <RouterProvider router={router} />
   </React.StrictMode>
);

