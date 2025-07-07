import { FlickeringGrid } from "components/magicui/flickering-grid";
import { Outlet } from "react-router";
import { Card } from "~/common/components/ui/card";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* <div className="bg-gradient-to-br from-primary hidden lg:block via-black to-primary/50"></div> */}
      <div>
        <FlickeringGrid
          squareSize={4}
          gridGap={5}
          maxOpacity={0.5}
          flickerChance={0.2}
          color="#ed5e2a"
        ></FlickeringGrid>
      </div>
      <Outlet />
    </div>
  );
}
