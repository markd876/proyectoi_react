import { Image } from "@nextui-org/react";

function ByciclesTypes() {
  return (
    <div className="flex flex-row gap-16 justify-center m-auto text-center">
      <a href="/bicicletas/ruta">
        <Image
          isZoomed
          isBlurred
          width={400}
          height={400}
          src="./seccion-ruta.jpg"
          alt="NextUI Album Cover"
          classNames="m-5"
        />
              <h1 className="font-bold text-lg" >Ruta</h1>
      </a>
      <a href="/bicicletas/mountain">
        <Image
          isBlurred
          isZoomed
          width={400}
          height={400}
          src="./seccion-mountain.jpg"
          alt="NextUI Album Cover"
          classNames="m-5"
        />
              <h1 className="font-bold text-lg">Montaña</h1>
      </a>
    </div>
  );
}

export default ByciclesTypes;
