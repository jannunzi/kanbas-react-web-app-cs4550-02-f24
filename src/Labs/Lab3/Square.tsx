import { ReactNode } from "react";

export default function Square({ children }: { children: ReactNode }) {
  const a = children as number;
  return (
    <div id="wd-square">
      <h4>Square</h4>a = {a}
      <br />a * a = {a * a}
      <hr />
    </div>
  );
}
