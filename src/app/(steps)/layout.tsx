import Stepper from "@/components/ui/stepper";

export default function StepsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Stepper currentStep="selectskip" />
      {children}
    </>
  );
}
