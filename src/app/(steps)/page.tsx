import SelectSkipHeader from "./_components/SelectSkipHeader";
import SkipHireList from "./_components/SkipHireList";

export default function Home() {
  return (
    <div className="container my-16 space-y-16 p-6">
      {/* select skip step  */}
      <SelectSkipHeader /> 
      <SkipHireList /> 
    </div>
  );
}
