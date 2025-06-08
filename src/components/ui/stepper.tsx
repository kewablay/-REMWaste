import { cn } from "@/lib/utils";
import { 
  MapPin, 
  Trash2, 
  Truck, 
  Shield, 
  Calendar,
  CreditCard 
} from "lucide-react";

export type Step = "postcode" | "wastetype" | "selectskip" | "permitcheck" | "choosedate" | "payment";

type StepperProps = {
  currentStep: Step;
};

function getStepIndex(step: string): number {
  const steps = ["postcode", "wastetype", "selectskip", "permitcheck", "choosedate", "payment"];
  return steps.indexOf(step);
}

export default function Stepper({ currentStep }: StepperProps) {
  const steps = [
    { 
      id: "postcode", 
      label: "Postcode",
      icon: MapPin
    },
    { 
      id: "wastetype", 
      label: "Waste Type",
      icon: Trash2
    },
    { 
      id: "selectskip", 
      label: "Select Skip",
      icon: Truck
    },
    { 
      id: "permitcheck", 
      label: "Permit Check",
      icon: Shield
    },
    { 
      id: "choosedate", 
      label: "Choose Date",
      icon: Calendar
    },
    { 
      id: "payment", 
      label: "Payment",
      icon: CreditCard
    },
  ];

  return (
    <div className="w-full sticky top-0 z-50 bg-slate-900 px-6 py-5 overflow-x-auto">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isPast = getStepIndex(currentStep) > index;
          const isCompleted = isPast;
          const isLast = index === steps.length - 1;
          const Icon = step.icon;

          return (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Container */}
              <div className="flex items-center space-x-3">
                {/* Icon Circle */}
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                    isActive
                      ? "bg-blue-600 text-white"
                      : isCompleted
                        ? "bg-blue-600 text-white"
                        : "bg-transparent border border-gray-600 text-gray-400"
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>
                
                {/* Label */}
                <span
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 whitespace-nowrap",
                    isActive
                      ? "text-white"
                      : isCompleted
                        ? "text-white"
                        : "text-gray-500"
                  )}
                >
                  {step.label}
                </span>
              </div>

              {/* Connecting Line */}
              {!isLast && (
                <div className="flex-1 px-4">
                  <div
                    className={cn(
                      "h-0.5 w-full transition-all duration-300",
                      isPast || (isActive && index < steps.length - 1)
                        ? "bg-blue-600"
                        : "bg-gray-700"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}