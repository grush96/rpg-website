import AttributeSelect from "./attribute-select";
import KnowledgeSelect from "./knowledge-select";

export default function ExplorationSection() {
  return (
    <fieldset className="grid gap-6 rounded-lg border p-4 bg-white">
      <legend className="-ml-1 px-1 text-sm font-medium">Exploration</legend>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <KnowledgeSelect />
        <AttributeSelect />
      </div>
    </fieldset>
  );
}
