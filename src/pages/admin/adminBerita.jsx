import React from "react";
import SideBar from "../../components/admin/SideBar";
import AdminBeritaa from "../../components/admin/AdminBeritaa";
const AdminBerita = () => {
  return (
    <div className="flex bg-loginLight min-h-screen">
      <SideBar />
      <AdminBeritaa />
    </div>
  );
};

export default AdminBerita;
