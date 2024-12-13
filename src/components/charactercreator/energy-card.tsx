import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function EnergyCardWrapper() {
  return (
    <>
      <EnergyCard title="Body" />
      <EnergyCard title="Senses" />
      <EnergyCard title="Endurance" />
      <EnergyCard title="Will" />
      <EnergyCard title="Mind" />
    </>
  );
}

export function EnergyCard({ title }: { title: string }) {
  return (
    <Card className="grid gap-1 text-center shadow basis-1/5 min-w-32 max-w-56 mr-2 mb-2 grow shrink">
      <CardHeader className="p-1 pt-2 pb-0 font-semibold">{title}</CardHeader>
      <Separator className="" />
      <CardContent className="flex items-center space-x-2 p-2">
        <div className="grow grid grid-cols-2 h-full">
          <p className="col-span-2 p-1 pb-2 text-sm font-extralight">Energy</p>
          <p className="self-center text-right">10</p>
          <div className="grid grid-cols-1 justify-items-center">
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <ChevronUp className="h-3 w-3" />
              <span className="sr-only">Up</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <ChevronDown className="h-3 w-3" />
              <span className="sr-only">Down</span>
            </Button>
          </div>
        </div>
        <Separator orientation="vertical" />
        <div className="grow grid grid-cols-1 h-full">
          <div className="p-1 pb-2 text-sm font-extralight">Die</div>
          <div>d0</div>
        </div>
      </CardContent>
    </Card>
  );
}
