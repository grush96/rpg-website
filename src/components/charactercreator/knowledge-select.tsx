"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { ScrollArea } from "../ui/scroll-area";

export default function KnowledgeSelect() {
  const infos = [
    {
      id: "politics",
      key: "politics",
      label: "Politics",
    },
    {
      id: "religion",
      key: "religion",
      label: "Religion",
    },
    {
      id: "nature",
      key: "nature",
      label: "Nature",
    },
    {
      id: "crafts",
      key: "crafts",
      label: "Crafts",
    },
    {
      id: "groups",
      key: "groups",
      label: "Groups",
    },
    {
      id: "lore",
      key: "lore",
      label: "Lore",
    },
    {
      id: "creatures",
      key: "creatures",
      label: "Creatures",
    },
    {
      id: "items",
      key: "items",
      label: "Items",
    },
  ] as const;

  return (
    <div className="grid gap-3">
      <Label htmlFor="knowledge" className="text-center">
        Knowledge
      </Label>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Choose Here</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <h1>Points Remaining: 20</h1>
          <ScrollArea className="h-72 w-full rounded-md border p-2">
            <DialogHeader>
              <DialogTitle>Knowledge Selection</DialogTitle>
              <DialogDescription>
                Choose what knowledge (including languages, skills, and magic)
                your character knows. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <fieldset className="grid gap-3 rounded-lg border p-4 bg-white">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Languages
                </legend>
                <DialogDescription>
                  Choose which languages your character can read (R), write (W),
                  listen (L), and/or speak (S).
                </DialogDescription>
                <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-x-3">
                  <div className="grid grid-cols-7 justify-items-center items-center">
                    <p className="col-span-3"></p>
                    <p>R</p>
                    <p>W</p>
                    <p>L</p>
                    <p>S</p>
                    <p className="col-span-3 justify-self-start">Common</p>
                    <Checkbox key="common-r" />
                    <Checkbox key="common-w" />
                    <Checkbox key="common-l" />
                    <Checkbox key="common-s" />
                    <p className="col-span-3 justify-self-start">Construct</p>
                    <Checkbox key="construct-r" />
                    <Checkbox key="construct-w" />
                    <Checkbox key="construct-l" />
                    <Checkbox key="construct-s" />
                    <p className="col-span-3 justify-self-start">Damned</p>
                    <Checkbox key="damned-r" />
                    <Checkbox key="damned-w" />
                    <Checkbox key="damned-l" />
                    <Checkbox key="damned-s" />
                    <p className="col-span-3 justify-self-start">Primordial</p>
                    <Checkbox key="primordial-r" />
                    <Checkbox key="primordial-w" />
                    <Checkbox key="primordial-l" />
                    <Checkbox key="primordial-s" />
                  </div>
                  <div className="grid grid-cols-7 justify-items-center items-center">
                    <p className="col-span-3"></p>
                    <p>R</p>
                    <p>W</p>
                    <p>L</p>
                    <p>S</p>
                    <p className="col-span-3 justify-self-start">Celestial</p>
                    <Checkbox key="celestial-r" />
                    <Checkbox key="celestial-w" />
                    <Checkbox key="celestial-l" />
                    <Checkbox key="celestial-s" />
                    <p className="col-span-3 justify-self-start">Eldritch</p>
                    <Checkbox key="eldritch-r" />
                    <Checkbox key="eldritch-w" />
                    <Checkbox key="eldritch-l" />
                    <Checkbox key="eldritch-s" />
                    <p className="col-span-3 justify-self-start">Infernal</p>
                    <Checkbox key="infernal-r" />
                    <Checkbox key="infernal-w" />
                    <Checkbox key="infernal-l" />
                    <Checkbox key="infernal-s" />
                    <p className="col-span-3 justify-self-start">Sylvan</p>
                    <Checkbox key="sylvan-r" />
                    <Checkbox key="sylvan-w" />
                    <Checkbox key="sylvan-l" />
                    <Checkbox key="sylvan-s" />
                  </div>
                </div>
              </fieldset>
              <fieldset className="grid gap-6 rounded-lg border p-4 bg-white">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Information
                </legend>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-1">
                  {infos.map((info) => (
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex gap-x-2">
                        <Checkbox
                          onCheckedChange={(checked) => {
                            if (checked && document) {
                              console.log("checked");
                              document
                                .getElementById(info.id)
                                ?.setAttribute(
                                  "class",
                                  "grid grid-col-1 gap-2"
                                );
                            } else if (!checked && document) {
                              console.log("unchecked");
                              document
                                .getElementById(info.id)
                                ?.setAttribute(
                                  "class",
                                  "grid-col-1 gap-2 hidden"
                                );
                            }
                          }}
                        />
                        <Label>{info.label}</Label>
                      </div>
                      <div
                        key={info.id}
                        id={info.id}
                        className="grid-col-1 gap-2 hidden"
                      >
                        <Input key={info.id + `1`} />
                        <Input key={info.id + `2`} />
                        <Input key={info.id + `3`} />
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset className="grid gap-6 rounded-lg border p-4 bg-white">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Skills
                </legend>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center">
                    <Input
                      id="level"
                      type="number"
                      min="0"
                      max="3"
                      defaultValue="0"
                      className="w-min"
                      // onChange={(e) => inputChange(e)}
                    />
                    <p className="pl-1">
                      /3 <Label>Skullduggery</Label>
                    </p>
                  </div>
                </div>
              </fieldset>
              <fieldset className="grid gap-6 rounded-lg border p-4 bg-white">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Magic
                </legend>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4"></div>
              </fieldset>
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
