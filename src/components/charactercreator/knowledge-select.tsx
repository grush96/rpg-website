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
import { Toggle } from "@/components/ui/toggle";

// TODO: consider adding dropdown option for info categories (disable with hover before buy)
// TODO: figure out levels for info, may change design
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

  const langs1 = [
    {
      id: "common",
      label: "Common",
    },
    {
      id: "construct",
      label: "Construct",
    },
    {
      id: "damned",
      label: "Damned",
    },
    {
      id: "primordial",
      label: "Primordial",
    },
  ];

  const langs2 = [
    {
      id: "celestial",
      label: "Celestial",
    },
    {
      id: "eldritch",
      label: "Eldritch",
    },
    {
      id: "infernal",
      label: "Infernal",
    },
    {
      id: "sylvan",
      label: "Sylvan",
    },
  ];

  function printLang(langs: Array<{ id: string; label: string }>) {
    return (
      <div className="grid grid-cols-7 justify-items-center items-center gap-y-1">
        <p className="col-span-3"></p>
        <p>R</p>
        <p>W</p>
        <p>L</p>
        <p>S</p>
        {langs.map((lang) => (
          <>
            <p className="col-span-3 justify-self-start">{lang.label}</p>
            <Toggle
              id={lang.id + "-r"}
              onPressedChange={(pressed) => {
                if (pressed && document) {
                  console.log(lang.id + "-w");
                  document
                    .getElementById(lang.id + "-w")
                    ?.removeAttribute("disabled");
                  document
                    .getElementById(lang.id + "-w")
                    ?.removeAttribute("data-disabled");
                } else if (!pressed && document) {
                  console.log("unpressed");
                  document
                    .getElementById(lang.id + "-w")
                    ?.setAttribute("disabled", "true");
                  document
                    .getElementById(lang.id + "-w")
                    ?.setAttribute("data-disabled", "true");
                }
              }}
            >
              1
            </Toggle>
            <Toggle id={lang.id + "-w"}>1</Toggle>
            <Toggle
              id={lang.id + "-l"}
              onPressedChange={(pressed) => {
                if (pressed && document) {
                  console.log(lang.id + "-s");
                  document
                    .getElementById(lang.id + "-s")
                    ?.removeAttribute("disabled");
                  document
                    .getElementById(lang.id + "-s")
                    ?.removeAttribute("data-disabled");
                } else if (!pressed && document) {
                  console.log("unpressed");
                  // document
                  //   .getElementById(lang.id + "-s")
                  //   ?.setAttribute("disabled", "true");
                  // document
                  //   .getElementById(lang.id + "-s")
                  //   ?.setAttribute("data-disabled", "true");
                  document
                    .getElementById(lang.id + "-s")
                    ?.setAttribute("aria-pressed", "false");
                  document
                    .getElementById(lang.id + "-s")
                    ?.setAttribute("data-state", "off");
                  document
                    .getElementById(lang.id + "-s")
                    ?.setAttribute("pressed", "off");
                }
              }}
            >
              1
            </Toggle>
            <Toggle id={lang.id + "-s"}>1</Toggle>
          </>
        ))}
      </div>
    );
  }

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
                Choose what knowledge (including languages, information, skills,
                and magic) your character knows. The number inside toggles are
                the point cost. Click save when you're done.
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
                  {printLang(langs1)}
                  {printLang(langs2)}
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
                <div className="grid grid-cols-2 gap-4">
                  <fieldset className="grid gap-2 rounded-lg border p-2 bg-white">
                    <legend className="flex -ml-1 px-1 text-sm font-medium">
                      <Checkbox className="align-middle" />
                      <p className="align-middle pl-1">Unlock: 10</p>
                    </legend>
                    <p className="justify-self-center font-bold">Survival</p>
                    <div className="flex items-center">
                      <Input
                        id="level"
                        type="number"
                        min="0"
                        max="3"
                        defaultValue="0"
                        className="w-12 h-8 p-2"
                        // onChange={(e) => inputChange(e)}
                      />
                      <p className="pl-1">
                        /3 <Label>Tracking</Label>
                      </p>
                    </div>
                    <div className="flex items-center pl-4">
                      <Input
                        id="level"
                        type="number"
                        min="0"
                        max="3"
                        defaultValue="0"
                        className="w-12 h-8 p-2"
                        // onChange={(e) => inputChange(e)}
                      />
                      <p className="pl-1">
                        /3 <Label>Tracking</Label>
                      </p>
                    </div>
                    <div className="flex items-center pl-4">
                      <Input
                        id="level"
                        type="number"
                        min="0"
                        max="3"
                        defaultValue="0"
                        className="w-12 h-8 p-2"
                        // onChange={(e) => inputChange(e)}
                      />
                      <p className="pl-1">
                        /3 <Label>Tracking</Label>
                      </p>
                    </div>
                    <div className="flex items-center pl-4">
                      <Input
                        id="level"
                        type="number"
                        min="0"
                        max="3"
                        defaultValue="0"
                        className="w-12 h-8 p-2"
                        // onChange={(e) => inputChange(e)}
                      />
                      <p className="pl-1">
                        /3 <Label>Tracking</Label>
                      </p>
                    </div>
                  </fieldset>
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
