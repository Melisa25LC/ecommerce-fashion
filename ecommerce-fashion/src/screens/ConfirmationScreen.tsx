import { Check } from 'lucide-react';

interface ConfirmationScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  data?: any;
}

export function ConfirmationScreen({ onNavigate, data }: ConfirmationScreenProps) {
  const orderNumber = data?.orderNumber || '123456';

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full space-y-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-3">
          <h1 className="text-xl uppercase tracking-wider dark:text-white">
            ¡Pedido confirmado!
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Gracias por tu compra. Hemos recibido tu pedido correctamente.
          </p>
        </div>

        {/* Order Number */}
        <div className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">
            Número de pedido
          </p>
          <p className="text-2xl tracking-wider dark:text-white">
            #{orderNumber}
          </p>
        </div>

        {/* Order Details */}
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p>
            Recibirás un email de confirmación con los detalles de tu pedido y el seguimiento del envío.
          </p>
          <p>
            Tiempo estimado de entrega: 3-5 días laborables
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-4">
          <button
            onClick={() => onNavigate('home')}
            className="w-full py-4 bg-black dark:bg-white text-white dark:text-black text-xs uppercase tracking-[0.2em] active:opacity-80"
          >
            Volver al inicio
          </button>
          <button
            onClick={() => onNavigate('catalog')}
            className="w-full py-4 border border-black dark:border-white text-black dark:text-white text-xs uppercase tracking-[0.2em] active:bg-black active:text-white dark:active:bg-white dark:active:text-black transition-colors"
          >
            Seguir comprando
          </button>
        </div>
      </div>
    </div>
  );
}
