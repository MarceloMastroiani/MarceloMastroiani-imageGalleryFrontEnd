import "./infinitiScroll.componet.css";
import Image from "next/image";

function titleComponent() {
  return (
    <div className="scroll-content">
      <Image
        className="item"
        src="/image-10.png"
        alt="bbbb"
        width={200}
        height={200}
      />
      <Image
        className="item"
        src="/image-3.png"
        alt="cccc"
        width={200}
        height={200}
        priority={true}
      />
      <Image
        className="item"
        src="/image-8.png"
        alt="dddd"
        width={200}
        height={200}
      />
      <Image
        className="item"
        src="/image-4.png"
        alt="eeee"
        width={200}
        height={200}
      />
    </div>
  );
}

export default function InfinitiScroll() {
  return (
    <div className=" scroll-container">
      {titleComponent()}
      {titleComponent()}
      {titleComponent()}
    </div>
  );
}
