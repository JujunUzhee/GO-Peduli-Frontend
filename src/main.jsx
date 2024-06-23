
// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErorrPage from "./pages/404.jsx";
import Home from "./pages/user/Home.jsx";
import Donasiku from "./pages/user/Donasiku.jsx";
import Tentang from "./pages/user/Tentang.jsx";
import Berita from "./pages/user/Berita.jsx";
import FormulirDonatur from "./pages/user/FormulirDonatur.jsx";
import FormulirMitra from "./pages/user/FormulirMitra.jsx";
import FullArticle from "./pages/user/FullArticle.jsx";
import PrivateRoute from "./components/PrivateRoute";
import AdminLogin from "./pages/admin/adminLogin.jsx";
import AdminDashboard from "./pages/admin/adminDashboard.jsx";
import AdminBerita from "./pages/admin/adminBerita.jsx";
import AdminDonasiku from "./pages/admin/adminDonasi.jsx";
import AdminMitra from "./pages/admin/adminMitra.jsx";
import AdminChat from "./pages/admin/adminChat.jsx";
import Faq from "./pages/user/Faq.jsx";
import LaporanArticle from "./pages/user/LaporanArticle.jsx";
import AdminMitraa from "./components/admin/AdminMitraa.jsx";
import MitraData from "./components/admin/mitraData.jsx";
const router = createBrowserRouter([
  {
    path: "*",
    element: <ErorrPage />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/donasiku",
    element: <Donasiku />,
  },
  {
    path: "/tentang",
    element: <Tentang />,
  },
  {
    path: "/berita",
    element: <Berita />,
  },
  {
    path: "/formulir-donatur",
    element: <FormulirDonatur />,
  },
  {
    path: "/formulir-mitra",
    element: <FormulirMitra />,
  },
  {
    path: "/article/:id",
    element: <FullArticle />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/berita",
    element: <AdminBerita />,
  },
  {
    path: "/admin/donasi",
    element: <AdminDonasiku />,
  },
  {
    path: "/admin/mitra",
    element: <AdminMitra />,
  },
  {
    path: "/admin/chat",
    element: <AdminChat />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },

  {
    path: "/laporan/:id",
    element: <LaporanArticle />,
  },

  {
    path: "/admin/dashboard",
    element: <PrivateRoute element={<AdminDashboard />} />,
  },

  {
    path: "/admin/Mitraa",
    element: <AdminMitraa />,
  },

  {
    path: "/admin/Data",
    element: <MitraData />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
