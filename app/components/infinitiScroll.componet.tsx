import "./infinitiScroll.componet.css";
import Image from "next/image";

function titleComponent() {
  return (
    <span className="flex gap-28 mx-10 justify-around opacity-70">
      <span>
        <Image src="/image-10.png" alt="bbbb" width={200} height={200} />
      </span>
      <span>
        <Image src="/image-3.png" alt="cccc" width={200} height={200} />
      </span>
      <span>
        <Image src="/image-8.png" alt="dddd" width={200} height={200} />
      </span>
      <span>
        <Image src="/image-4.png" alt="eeee" width={200} height={200} />
      </span>
    </span>
  );
}

export default function InfinitiScroll() {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center mt-20 scroller-container">
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
