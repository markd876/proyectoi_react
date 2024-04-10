import { FaCreditCard, FaTruck, FaLock } from "react-icons/fa6";

function Promos() {
  return (
    <div className="flex flex-row max-w-full min-w-full justify-center gap-32 my-8">
        <div className="flex flex-col text-center justify-center align-center">
            <div className="flex justify-center align-center">
            <FaCreditCard style={{fontSize:40}}/>
              </div>
            <h2>Cuotas sin interés</h2>
            <p>Paga con tus tarjetas para aprovechar las cuotas</p>
        </div>
        <div className="flex flex-col text-center justify-center">
          <div className="flex justify-center align-center">
          <FaTruck style={{fontSize:40}}/>
          </div>
            <h2>Envios Gratis</h2>
            <p>Envios gratis a partir de tu compra de $100.000 a todo el pais</p>
        </div>
        <div className="flex flex-col text-center justify-center">
          <div className="flex justify-center align-center">
          <FaLock style={{fontSize:40}}/>
          </div>
            <h2>Paga Seguro</h2>
            <p>Ofrecemos pago seguro a traves de MercadoPago</p>
        </div>
    </div>
  );
}

export default Promos;
