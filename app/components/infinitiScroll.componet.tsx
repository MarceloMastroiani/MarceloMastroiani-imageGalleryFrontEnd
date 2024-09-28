import "./infinitiScroll.componet.css";
import Image from "next/image";

function titleComponent() {
  return (
    <span className="text-5xl flex gap-28 mx-5 justify-around">
      <span>
        <Image src="/image-1.png" alt="aaaa" width={100} height={100} />
      </span>
      <span>
        <Image src="/image-2.png" alt="bbbb" width={100} height={100} />
      </span>
      <span>
        <Image src="/image-3.png" alt="cccc" width={100} height={100} />
      </span>
      <span>
        <Image src="/image-4.png" alt="dddd" width={100} height={100} />
      </span>
    </span>
  );
}

export default function InfinitiScroll() {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center scroller-container">
      <div className="stock-ticker-left">
        <div>{titleComponent()}</div>
        <div aria-hidden="true">{titleComponent()}</div>
      </div>
      <div className="stock-ticker-right flex-row-reverse">
        <div>{titleComponent()}</div>
        <div aria-hidden="true">{titleComponent()}</div>
      </div>
    </div>
  );
}

// Hacer que el scroll se implemente con el fondo del app/Page
// bajarle la transparencia
// poner imagenes acordes
