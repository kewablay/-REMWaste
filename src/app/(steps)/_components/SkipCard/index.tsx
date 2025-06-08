import { Badge } from "@/components/ui/badge";
import { SkipType } from "@/types/skip.types";
import { Biohazard, Check, TriangleAlert } from "lucide-react";
import Image from "next/image";
import React from "react";

interface skipCardProps extends SkipType {
  isSelected?: boolean;
  onSelect: (skip: SkipType) => void;
}

export default function SkipCard({
  isSelected,
  onSelect,
  ...props
}: skipCardProps) {
  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${props?.size}-yarder-skip.jpg`;

  const handleSkipSelect = () => onSelect({ ...props });
  return (
    <div className="space-y-3" onClick={handleSkipSelect}>
      {/* Image section  */}
      <div className="rounded-lg bg-gray-200 h-[15rem] w-full relative overflow-hidden group ">
        {/* selected check  */}
        {isSelected && (
          <div className="absolute left-3 top-3 z-10 size-8 flex items-center justify-center rounded-full bg-blue-600">
            <Check className="text-white" size={16} />
          </div>
        )}

        {/* skip image  */}
        <Image
          src={imageUrl}
          alt={`${props?.size} yarder skip`}
          fill
          className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
          priority={true}
        />

        {!props?.allowed_on_road && (
          <Badge className="absolute bottom-3 right-3 ">
            <TriangleAlert className="text-inherit" /> Not Allowed On Road
          </Badge>
        )}
        {!props?.allows_heavy_waste && (
          <Badge className="absolute bg-blue-500 text-white bottom-3 left-3">
            <Biohazard className="text-inherit" /> Heavy Waste
          </Badge>
        )}
      </div>

      {/* details section  */}
      <div className="space-y-3 flex gap-3 justify-between items-start">
        {/* name and hire period  */}
        <div className="space-y-1">
          <h2 className="text-lg font-bold tracking-tight">
            {props?.size} yard skip
          </h2>
          <p className=" text-sm text-gray-500">
            {props?.hire_period_days} day hire period
          </p>
        </div>

        {/* price */}
        <div className="text-end">
          <h3 className="text-2xl font-bold ">£{props?.price_before_vat} </h3>
          <small className="text-sm text-gray-500">({props?.vat}% VAT)</small>
        </div>
      </div>
    </div>
  );
}
