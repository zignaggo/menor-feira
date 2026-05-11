import { LPNav } from "@/components/sections/nav";
import { LPHero } from "@/components/sections/hero";
import { LPProblem } from "@/components/sections/problem";
import { LPHow } from "@/components/sections/how";
import { LPReveal } from "@/components/sections/reveal";
import { LPPrivacy } from "@/components/sections/privacy";
import { LPStores } from "@/components/sections/stores";
import { LPCTA, LPFooter } from "@/components/sections/cta";

export default function App() {
  return (
    <>
      <LPNav />
      <LPHero />
      <LPProblem />
      <LPHow />
      <LPReveal />
      <LPPrivacy />
      <LPStores />
      <LPCTA />
      <LPFooter />
    </>
  );
}
