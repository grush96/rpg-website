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

export default function KnowledgeSelect() {
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
          <DialogHeader>
            <DialogTitle>Knowledge Selection</DialogTitle>
            <DialogDescription>
              Choose what knowledge (including languages, skills, and magic)
              your character knows. Click save when you're done.
            </DialogDescription>
            <h1>Points Remaining: 20</h1>
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
              <div className="grid grid-cols-2 gap-x-3">
                <div className="grid grid-cols-7 justify-items-center items-center">
                  <p className="col-span-3"></p>
                  <p>R</p>
                  <p>W</p>
                  <p>L</p>
                  <p>S</p>
                  <p className="col-span-3 justify-self-start">Common</p>
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <p className="col-span-3 justify-self-start">Construct</p>
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <p className="col-span-3 justify-self-start">Damned</p>
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <p className="col-span-3 justify-self-start">Primordial</p>
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                </div>
                <div className="grid grid-cols-7 justify-items-center items-center">
                  <p className="col-span-3"></p>
                  <p>R</p>
                  <p>W</p>
                  <p>L</p>
                  <p>S</p>
                  <p className="col-span-3 justify-self-start">Celestial</p>
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <p className="col-span-3 justify-self-start">Eldritch</p>
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <p className="col-span-3 justify-self-start">Infernal</p>
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <p className="col-span-3 justify-self-start">Sylvan</p>
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                  <Checkbox id="1" />
                </div>
              </div>
            </fieldset>
            <fieldset className="grid gap-6 rounded-lg border p-4 bg-white">
              <legend className="-ml-1 px-1 text-sm font-medium">Skills</legend>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4"></div>
            </fieldset>
            <fieldset className="grid gap-6 rounded-lg border p-4 bg-white">
              <legend className="-ml-1 px-1 text-sm font-medium">Magic</legend>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4"></div>
            </fieldset>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
