import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState, useEffect } from "react";

export default function StyleSelect({ prof }: { prof: string }) {
  const [empty, setEmpty] = useState<boolean>(true);
  const [options, setOptions] = useState<string[]>([]);
  const [text, setText] = useState<string>("First select a class");

  useEffect(() => {
    if (prof == "artificer") {
      setEmpty(false);
      setOptions(["Alchemical", "Magical", "Mechanical"]);
      setText("Select a style");
    } else if (prof == "conduit") {
      setEmpty(false);
      setOptions(["Thought", "Movement", "Emotion"]);
      setText("Select a style");
    } else if (prof == "druid") {
      setEmpty(false);
      setOptions(["Conjurer", "Shifter", "Warden"]);
      setText("Select a style");
    } else if (prof == "juggernaut") {
      setEmpty(false);
      setOptions(["Joy", "Passion", "Serenity"]);
      setText("Select a style");
    } else if (prof == "mage") {
      setEmpty(false);
      setOptions([
        "Amulet",
        "Book",
        "Deck of Cards",
        "Familiar",
        "Tattoos",
        "Wand",
        "Weapon",
      ]);
      setText("Select a style");
    } else if (prof == "marksman") {
      setEmpty(false);
      setOptions(["Flourish", "Run and Gun", "Sharpshooter"]);
      setText("Select a style");
    } else if (prof == "monk") {
      setEmpty(false);
      setOptions(["Dancer", "Martial Artist", "Pugilist"]);
      setText("Select a style");
    } else if (prof == "specialist") {
      setEmpty(false);
      setOptions(["Fancy Feet", "Stealth", "Wit"]);
      setText("Select a style");
    } else if (prof == "summoner") {
      setEmpty(false);
      setOptions(["Body", "Senses", "Will"]);
      setText("Select a style");
    } else if (prof == "weaponmaster") {
      setEmpty(false);
      setOptions(["Skirmisher", "Striker", "Vanguard"]);
      setText("Select a style");
    } else {
      setEmpty(true);
      setOptions([]);
      setText("First select a class");
    }
  }, [prof]);

  return (
    <div className="grid gap-3">
      <Label htmlFor="style">Style</Label>
      <Select disabled={empty} defaultValue="" key={options[0]}>
        <SelectTrigger
          id="style"
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
