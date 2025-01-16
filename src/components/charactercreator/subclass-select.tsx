import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState, useEffect } from "react";

export default function SubclassSelect({ prof }: { prof: string }) {
  const [empty, setEmpty] = useState<boolean>(true);
  const [options, setOptions] = useState<string[]>([]);
  const [text, setText] = useState<string>("First select a class");

  useEffect(() => {
    if (prof == "artificer") {
      setEmpty(false);
      setOptions(["Apothecary", "Ritualist", "Tinkerer", "Weaponsmith"]);
      setText("Select a subclass");
    } else if (prof == "conduit") {
      setEmpty(true);
      setOptions([]);
      setText("No subclasses");
    } else if (prof == "druid") {
      setEmpty(true);
      setOptions([]);
      setText("No subclasses");
    } else if (prof == "juggernaut") {
      setEmpty(false);
      setOptions(["Brawler", "Cleaver", "Commander", "Shielder"]);
      setText("Select a subclass");
    } else if (prof == "mage") {
      setEmpty(false);
      setOptions(["Sorcerer", "Warlock", "Witch", "Wizard"]);
      setText("Select a subclass");
    } else if (prof == "marksman") {
      setEmpty(false);
      setOptions(["Duelist", "Gunslinger", "Magic Weapon", "Spellgunner"]);
      setText("Select a subclass");
    } else if (prof == "monk") {
      setEmpty(false);
      setOptions(["Drunken Master", "Elementalist", "Energy", "Tools"]);
      setText("Select a subclass");
    } else if (prof == "specialist") {
      setEmpty(false);
      setOptions(["Ranger", "Rogue", "Savant", "Swashbuckler"]);
      setText("Select a subclass");
    } else if (prof == "summoner") {
      setEmpty(false);
      setOptions(["Armor", "Companion", "Gun", "Mount"]);
      setText("Select a subclass");
    } else if (prof == "weaponmaster") {
      setEmpty(true);
      setOptions([]);
      setText("No subclasses");
    } else {
      setEmpty(true);
      setOptions([]);
      setText("First select a class");
    }
  }, [prof]);

  return (
    <div className="grid gap-3">
      <Label htmlFor="subclass">Subclass</Label>
      <Select disabled={empty} defaultValue="" key={options[0]}>
        <SelectTrigger
          id="subclass"
          className="items-start [&_[data-description]]:hidden"
        >
          <SelectValue placeholder={text} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.toLowerCase()} value={option.toLowerCase()}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
