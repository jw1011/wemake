import { Outlet } from "react-router";
import { Card } from "~/common/components/ui/card";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-gradient-to-br from-primary via-black to-primary/50"></div>
      <Outlet />
    </div>
  );
}
