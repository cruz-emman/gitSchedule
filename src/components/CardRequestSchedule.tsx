import * as React from "react";

import {
  Card,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return <Badge>Badge</Badge>;
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@radix-ui/react-separator";

export function CardRequestSchedule() {
  return (
    <Card className="p-4 w-96">
      <div className="flex items-center h-full gap-4 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
        <Separator  orientation="vertical" />
        <div className="flex flex-col h-full gap-1">
          <h1 className="font-semibold">John Doe (Department Of Affairs) </h1>
          <p className="text-sm font-semibold text-gray-400">1:00 PM to 2:00 PM</p>
          <div className="flex w-full gap-1 text-white ">
          <Badge className="flex px-2 items-centerw-12">Zoom</Badge>
          <Badge className="flex px-2 items-centerw-12">Zoom</Badge>
          <Badge className="flex px-2 items-centerw-12">Zoom</Badge>
          </div>
          
        </div>
      </div>
    </Card>
  );
}
