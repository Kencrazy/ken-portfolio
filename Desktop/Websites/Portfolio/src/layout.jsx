import BottomNav from "./components/bottomNav";
import MusicPlayer from "./components/musicPlayer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Outlet />  
      <BottomNav />
      <MusicPlayer/>
    </>
  );
}
