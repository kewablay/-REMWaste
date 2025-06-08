import Stepper from "@/components/Stepper";

export default function StepsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Stepper />
      {children}
    </>
  );
}
