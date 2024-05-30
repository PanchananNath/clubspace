import AdminPanel from "@/components/admin/adminpanel";
import SideBar from "@/components/common/SideBar";
import ProfileBar from "@/components/common/profilebar";

export default function Admin() {
  return (
    <main className="h-screen flex overflow-hidden bg-primary">
      <SideBar />
      <div
        className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white px-5"
        style={{
          backgroundImage: `url("/bglogo.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ProfileBar />
        <h1 className="text-2xl text-primary font-bold border-b-2 border-slate-400 mb-3">
          Admin Panel
        </h1>
        <div className="grid grid-cols-3 gap-10">
          <AdminPanel />
          <AdminPanel />
          <AdminPanel />
        </div>
      </div>
    </main>
  );
}
