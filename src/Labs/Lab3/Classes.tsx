import "./Classes.css";
const someDynamicClass = () => {
  return "wd-bg-red wd-fg-black wd-padding-10px";
};
const someOtherDynamicClass = () => {
  const color = "blue";
  //   return "wd-bg-" + color + " wd-fg-black wd-padding-10px";
  return `wd-bg-${color} wd-fg-black wd-padding-10px`;
};
export default function Classes() {
  const color = "blue";
  const dangerous = false;

  return (
    <div>
      <h2>Classes</h2>
      <div
        className={`${dangerous ? "wd-bg-red" : "wd-bg-green"}
                                     wd-fg-black wd-padding-10px`}
      >
        Dangerous background
      </div>

      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Dynamic Blue background
      </div>
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Yellow background
      </div>
      <div className={someOtherDynamicClass()}>Blue background</div>
      <div className={someDynamicClass()}>Red background</div>
      <hr />
    </div>
  );
}
