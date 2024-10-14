import { Hero, TodayFlash } from "./Components/ui";


export default function Home() {


  return (
    <div className="grid min-h-screen m-2 p-2 gap-5 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <TodayFlash />
    </div> 
  );
}
