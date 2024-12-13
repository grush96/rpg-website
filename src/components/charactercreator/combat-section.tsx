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
import EnergyCardWrapper from "@/components/charactercreator/energy-card";

export default function CombatSection() {
  return (
    <fieldset className="grid gap-6 rounded-lg border p-4 bg-white">
      <legend className="-ml-1 px-1 text-sm font-medium">Combat</legend>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid gap-3">
          <Label htmlFor="class">Class</Label>
          <Select>
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
        <div className="grid gap-3">
          <Label htmlFor="subclass">Subclass</Label>
          <Select>
            <SelectTrigger
              id="subclass"
              className="items-start [&_[data-description]]:hidden"
            >
              <SelectValue placeholder="Select a subclass" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="genesis">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Rabbit className="size-5" />
                  <div className="grid gap-0.5">
                    <p>
                      Neural{" "}
                      <span className="font-medium text-foreground">
                        Genesis
                      </span>
                    </p>
                    <p className="text-xs" data-description>
                      Our fastest model for general use cases.
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="explorer">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Bird className="size-5" />
                  <div className="grid gap-0.5">
                    <p>
                      Neural{" "}
                      <span className="font-medium text-foreground">
                        Explorer
                      </span>
                    </p>
                    <p className="text-xs" data-description>
                      Performance and speed for efficiency.
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="quantum">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Turtle className="size-5" />
                  <div className="grid gap-0.5">
                    <p>
                      Neural{" "}
                      <span className="font-medium text-foreground">
                        Quantum
                      </span>
                    </p>
                    <p className="text-xs" data-description>
                      The most powerful model for complex computations.
                    </p>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid gap-3">
          <Label htmlFor="style">Style</Label>
          <Select>
            <SelectTrigger
              id="style"
              className="items-start [&_[data-description]]:hidden"
            >
              <SelectValue placeholder="Select a style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="genesis">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Rabbit className="size-5" />
                  <div className="grid gap-0.5">
                    <p>
                      Neural{" "}
                      <span className="font-medium text-foreground">
                        Genesis
                      </span>
                    </p>
                    <p className="text-xs" data-description>
                      Our fastest model for general use cases.
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="explorer">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Bird className="size-5" />
                  <div className="grid gap-0.5">
                    <p>
                      Neural{" "}
                      <span className="font-medium text-foreground">
                        Explorer
                      </span>
                    </p>
                    <p className="text-xs" data-description>
                      Performance and speed for efficiency.
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="quantum">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Turtle className="size-5" />
                  <div className="grid gap-0.5">
                    <p>
                      Neural{" "}
                      <span className="font-medium text-foreground">
                        Quantum
                      </span>
                    </p>
                    <p className="text-xs" data-description>
                      The most powerful model for complex computations.
                    </p>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
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
      <fieldset className="grid relative gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium">Energy</legend>
        <span className="absolute -top-6 right-3 p-1 bg-white">
          Points Remaining: 10
        </span>
        <div className="flex flex-wrap">
          <EnergyCardWrapper />
          <div className="grow shrink basis-1/5 min-w-32 max-w-56 mr-2 mb-2"></div>
          <div className="grow shrink basis-1/5 min-w-32 max-w-56 mr-2 mb-2"></div>
          <div className="grow shrink basis-1/5 min-w-32 max-w-56 mr-2 mb-2"></div>
        </div>
      </fieldset>
    </fieldset>
  );
}
