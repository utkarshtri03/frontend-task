import LeftDash from "./LeftDash";
import Rightdash from "./Rightdash";
import Inputquery from "./inputquery";
import Table1 from "./table1";
import Table2 from "./table2";

export default function Home() {
  return (
    <div className="flex w-screen">
      <LeftDash />
      <Rightdash />
    </div>
  );
}
