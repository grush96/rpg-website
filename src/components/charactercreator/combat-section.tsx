"use client";

import { Bird, Rabbit, Turtle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState, useEffect } from "react";

import EnergyWrapper from "./energy-card";
import SubclassSelect from "./subclass-select";
import StyleSelect from "./style-select";

export default function CombatSection() {
  const [prof, setProf] = useState<string>("");

  const classChoice = (value: string) => {
    setProf(value);
  };

  return (
    <fieldset className="grid gap-6 rounded-lg border p-4 bg-white">
      <legend className="-ml-1 px-1 text-sm font-medium">Combat</legend>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid gap-3">
          <Label htmlFor="class">Class</Label>
          <Select onValueChange={classChoice} defaultValue="">
            <SelectTrigger
              id="class"
              className="items-start [&_[data-description]]:hidden"
            >
              <SelectValue placeholder="Select a class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="artificer">Artificer</SelectItem>
              <SelectItem value="conduit">Conduit</SelectItem>
              <SelectItem value="druid">Druid</SelectItem>
              <SelectItem value="juggernaut">Juggernaut</SelectItem>
              <SelectItem value="mage">Mage</SelectItem>
              <SelectItem value="marksman">Marksman</SelectItem>
              <SelectItem value="monk">Monk</SelectItem>
              <SelectItem value="specialist">Specialist</SelectItem>
              <SelectItem value="summoner">Summoner</SelectItem>
              <SelectItem value="weaponmaster">Weaponmaster</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <SubclassSelect prof={prof} />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <StyleSelect prof={prof} />
        <div className="grid gap-3">
          <Label htmlFor="abilities" className="text-center">
            Abilities
          </Label>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Choose Here</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <EnergyWrapper />
    </fieldset>
  );
}
