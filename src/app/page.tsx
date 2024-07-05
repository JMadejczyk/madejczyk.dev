import Infinity from "./components/Infinity";
import Spectacular from "./components/Spectacular";
import ShortAbout from "./components/ShortAbout";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between">
    <main>
      <Infinity />
      <Spectacular />
      <ShortAbout />
      <Infinity />
    </main>
  );
}
