// https://ui-8dy8ykf4h-shadcn-pro.vercel.app/blocks

import BasicSection from "@/components/charactercreator/basic-section";
import CharacterSheet from "@/components/charactercreator/character-sheet";
import CombatSection from "@/components/charactercreator/combat-section";
import ExplorationSection from "@/components/charactercreator/exploration-section";

export default function Page() {
  return (
    <main className="grid flex-1 gap-4 overflow-auto p-4 sm:flex-col md:grid-cols-2 bg-slate-50">
      <div
        className="relative flex-col items-start gap-8 md:flex"
        x-chunk="dashboard-03-chunk-0"
      >
        <form className="grid w-full items-start gap-6">
          <BasicSection />
          <CombatSection />
          <ExplorationSection />
        </form>
      </div>
      <CharacterSheet />
    </main>
  );
}
