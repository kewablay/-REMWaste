import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SkipType } from "@/types/skip.types";

interface FormNavigationPopupProps extends SkipType {
  isOpen: boolean;
}

export default function FormNavigationPopup({
  isOpen,
  ...props
}: FormNavigationPopupProps) {
  return (
    <Sheet modal={false} open={isOpen}>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent side="bottom" className="p-4">
        <SheetHeader>
          <SheetDescription className="container !p-0">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colors may vary,
            options and/or accessories may be featured at additional cost
          </SheetDescription>
        </SheetHeader>

        <div className="container">
          {/* skip details  */}
          <div className="flex items-start justify-between">
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
              <h3 className="text-2xl font-bold ">
                £{props?.price_before_vat}
              </h3>
              <small className="text-sm text-gray-500">
                ({props?.vat}% VAT)
              </small>
            </div>
          </div>
          {/* action buttons  */}
          <div className="flex justify-between items-center gap-4 w-full md:justify-end mt-4">
            <Button
              variant={"outline"}
              className="flex-1 md:flex-initial md:w-26"
            >
              Back
            </Button>
            <Button className="flex-1 md:flex-initial md:w-26">Next</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
