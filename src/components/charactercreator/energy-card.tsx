"use client";

import { useBoundStore } from "@/lib/providers/store-provider";

import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useContext } from "react";

export default function EnergyWrapper() {
  const {
    points,
    bodyEnergy,
    enduranceEnergy,
    mindEnergy,
    sensesEnergy,
    willEnergy,
    decrementBody,
    decrementEndurance,
    decrementMind,
    decrementSenses,
    decrementWill,
    incrementBody,
    incrementEndurance,
    incrementMind,
    incrementSenses,
    incrementWill,
  } = useBoundStore((state) => state);

  // const [points, setPoints] = useState(10);
  // const [used, setUsed] = useState(0);

  // function downPoints() {
  //   setUsed(used + 1);
  // }

  // function upPoints() {
  //   setUsed(used - 1);
  // }

  // useEffect(() => {
  //   setPoints(
  //     5 + 5 * +(document.getElementById("level") as HTMLInputElement).value
  //   );
  //   console.log(points);
  //   console.log(used);
  // });

  return (
    <fieldset className="grid relative gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">Energy</legend>
      <span className="absolute -top-6 right-3 p-1 bg-white">
        Points Remaining: {points}
      </span>
      <div className="flex flex-wrap">
        <EnergyCard
          title="Body"
          value={bodyEnergy}
          downValue={decrementBody}
          upValue={incrementBody}
        />
        <EnergyCard
          title="Senses"
          value={sensesEnergy}
          downValue={decrementSenses}
          upValue={incrementSenses}
        />
        <EnergyCard
          title="Endurance"
          value={enduranceEnergy}
          downValue={decrementEndurance}
          upValue={incrementEndurance}
        />
        <EnergyCard
          title="Will"
          value={willEnergy}
          downValue={decrementWill}
          upValue={incrementWill}
        />
        <EnergyCard
          title="Mind"
          value={mindEnergy}
          downValue={decrementMind}
          upValue={incrementMind}
        />
        <div className="grow shrink basis-1/5 min-w-32 max-w-56 mr-2 mb-2"></div>
        <div className="grow shrink basis-1/5 min-w-32 max-w-56 mr-2 mb-2"></div>
        <div className="grow shrink basis-1/5 min-w-32 max-w-56 mr-2 mb-2"></div>
      </div>
    </fieldset>
  );
}

function EnergyCard({
  title,
  value,
  downValue,
  upValue,
}: {
  title: string;
  value: number;
  downValue: Function;
  upValue: Function;
}) {
  const { points, setPoints } = useBoundStore((state) => state);
  const [die, setDie] = React.useState("d0");

  function handleUp() {
    if (value < 60 && points > 0) {
      upValue();
    }
  }

  function handleDown() {
    if (value > 10) {
      downValue();
    }
  }

  useEffect(() => {
    setPoints();
    if (value < 20) {
      setDie("d0");
    } else if (value < 30) {
      setDie("d4");
    } else if (value < 40) {
      setDie("d6");
    } else if (value < 50) {
      setDie("d8");
    } else if (value < 60) {
      setDie("d10");
    } else {
      setDie("d12");
    }
  }, [value]);

  return (
    <Card className="grid gap-1 text-center shadow basis-1/5 min-w-32 max-w-56 mr-2 mb-2 grow shrink">
      <CardHeader className="p-1 pt-2 pb-0 font-semibold">{title}</CardHeader>
      <Separator className="" />
      <CardContent className="flex items-center space-x-2 p-2">
        <div className="grow grid grid-cols-2 h-full">
          <p className="col-span-2 p-1 pb-2 text-sm font-extralight">Energy</p>
          <p className="self-center text-right">
            {title === "Endurance" ? 2 * value : value}
          </p>
          <div className="grid grid-cols-1 justify-items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4"
              onClick={handleUp}
            >
              <ChevronUp className="h-3 w-3" />
              <span className="sr-only">Up</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4"
              onClick={handleDown}
            >
              <ChevronDown className="h-3 w-3" />
              <span className="sr-only">Down</span>
            </Button>
          </div>
        </div>
        <Separator orientation="vertical" />
        <div className="grow grid grid-cols-1 h-full">
          <div className="p-1 pb-2 text-sm font-extralight">Die</div>
          <div>{die}</div>
        </div>
      </CardContent>
    </Card>
  );
}
