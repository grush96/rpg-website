import { Info } from "lucide-react";
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

export default function BasicSection() {
  return (
    <fieldset className="grid gap-6 rounded-lg border p-4 bg-white">
      <legend className="-ml-1 px-1 text-sm font-medium">Basic</legend>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="grid md:col-span-2 lg:col-span-3 gap-3">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter character name..." />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="level">Level</Label>
          <Input id="level" type="number" min="1" max="20" defaultValue="1" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid gap-3">
          <div className="flex gap-1">
            <Label htmlFor="species">Species</Label>
            <Dialog>
              <DialogTrigger>
                <Info className="size-4" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Species</DialogTitle>
                  <DialogDescription>
                    What does species do, Current Choice:
                  </DialogDescription>
                </DialogHeader>
                <div>List all species here and allow players to choose.</div>
                <DialogFooter>Confirm choice of species here?</DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Select>
            <SelectTrigger
              id="species"
              className="items-start [&_[data-description]]:hidden"
            >
              <SelectValue placeholder="Select a species" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dwarf">Dwarf</SelectItem>
              <SelectItem value="elf">Elf</SelectItem>
              <SelectItem value="gnome">Gnome</SelectItem>
              <SelectItem value="halfling">Halfling</SelectItem>
              <SelectItem value="human">Human</SelectItem>
              <SelectItem value="orc">Orc</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="theme">Theme</Label>
          <Select>
            <SelectTrigger
              id="theme"
              className="items-start [&_[data-description]]:hidden"
            >
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="art">Art</SelectItem>
              <SelectItem value="belief">Belief</SelectItem>
              <SelectItem value="creation">Creation</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="eldritch">Eldritch</SelectItem>
              <SelectItem value="gods">Gods</SelectItem>
              <SelectItem value="innate">Innate</SelectItem>
              <SelectItem value="nature">Nature</SelectItem>
              <SelectItem value="shadows">Shadows</SelectItem>
              <SelectItem value="spirits">Spirits</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </fieldset>
  );
}
