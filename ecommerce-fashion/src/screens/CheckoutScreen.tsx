import { ChevronLeft, Edit2, Check } from 'lucide-react';
import { Input } from '../components/ui';
import { useState } from 'react';

interface CheckoutScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function CheckoutScreen({ onNavigate }: CheckoutScreenProps) {
  const [step, setStep] = useState<'address' | 'payment' | 'confirm'>('address');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const steps = [
    { id: 'address', label: 'Dirección' },
    { id: 'payment', label: 'Pago' },
    { id: 'confirm', label: 'Confirmar' }
  ];

  const currentStepIndex = steps.findIndex(s => s.id === step);

  const handleContinue = () => {
    if (step === 'address') setStep('payment');
    else if (step === 'payment') setStep('confirm');
    else onNavigate('confirmation', { orderNumber: Math.floor(100000 + Math.random() * 900000) });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-black z-50 border-b border-gray-200 dark:border-gray-900">
        <div className="px-4 py-4 flex items-center justify-between">
          <button onClick={() => onNavigate('cart')}>
            <ChevronLeft className="w-6 h-6 dark:text-white" />
          </button>
          <h1 className="text-sm uppercase tracking-[0.3em] dark:text-white">Checkout</h1>
          <div className="w-6"></div>
        </div>

        {/* Progress Steps */}
        <div className="px-4 pb-6 pt-2">
          <div className="flex items-center justify-center mb-4">
            {steps.map((s, idx) => (
              <div key={s.id} className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  {idx < currentStepIndex ? (
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center">
                      <span className="text-black">{idx + 1}</span>
                    </div>
                  ) : idx === currentStepIndex ? (
                    <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white">{idx + 1}</span>
                    </div>
                  ) : (
                    <span className="text-white">{idx + 1}</span>
                  )}
                </div>
                {idx < steps.length - 1 && (
                  <div className={`h-[2px] w-24 ${idx < currentStepIndex ? 'bg-white' : 'bg-gray-700'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between px-2">
            {steps.map((s, idx) => (
              <span 
                key={s.id}
                className={`text-xs ${idx <= currentStepIndex ? 'text-white' : 'text-gray-600'}`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {step === 'address' && (
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-widest mb-6 dark:text-white">Dirección de envío</h2>
            <Input
              label="Nombre completo"
              type="text"
              placeholder="Juan Pérez"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              label="Email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              label="Dirección"
              type="text"
              placeholder="Calle Principal 123"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Ciudad"
                type="text"
                placeholder="Madrid"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
              <Input
                label="Código postal"
                type="text"
                placeholder="28001"
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
              />
            </div>
          </div>
        )}

        {step === 'payment' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm uppercase tracking-widest dark:text-white">Método de pago</h2>
              <button 
                onClick={() => setStep('address')}
                className="flex items-center gap-1 text-xs uppercase tracking-wider underline dark:text-white"
              >
                <Edit2 className="w-3 h-3" />
                Editar dirección
              </button>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-6">
              <p className="text-xs dark:text-white mb-1">{formData.name}</p>
              <p className="text-xs text-gray-500">{formData.address}</p>
              <p className="text-xs text-gray-500">{formData.city}, {formData.postalCode}</p>
            </div>

            <Input
              label="Número de tarjeta"
              type="text"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Fecha exp."
                type="text"
                placeholder="MM/AA"
                value={formData.cardExpiry}
                onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
              />
              <Input
                label="CVV"
                type="text"
                placeholder="123"
                value={formData.cardCvv}
                onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
              />
            </div>
          </div>
        )}

        {step === 'confirm' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm uppercase tracking-widest dark:text-white">Confirmar pedido</h2>
              <button 
                onClick={() => setStep('payment')}
                className="flex items-center gap-1 text-xs uppercase tracking-wider underline dark:text-white"
              >
                <Edit2 className="w-3 h-3" />
                Editar pago
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Dirección de envío</p>
                <p className="text-xs dark:text-white mb-1">{formData.name}</p>
                <p className="text-xs text-gray-500">{formData.address}</p>
                <p className="text-xs text-gray-500">{formData.city}, {formData.postalCode}</p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Método de pago</p>
                <p className="text-xs dark:text-white">•••• •••• •••• {formData.cardNumber.slice(-4)}</p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-3">Resumen del pedido</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between dark:text-white">
                    <span>Subtotal</span>
                    <span>139,90 EUR</span>
                  </div>
                  <div className="flex justify-between dark:text-white">
                    <span>Envío</span>
                    <span>Gratis</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-800 flex justify-between">
                    <span className="uppercase tracking-wider dark:text-white">Total</span>
                    <span className="dark:text-white">139,90 EUR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fixed Continue Button */}
      <div className="sticky bottom-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900 px-4 py-4">
        <button
          onClick={handleContinue}
          className="w-full py-4 bg-black dark:bg-white text-white dark:text-black text-xs uppercase tracking-[0.2em] active:opacity-80"
        >
          {step === 'confirm' ? 'Confirmar pedido' : 'Continuar'}
        </button>
      </div>
    </div>
  );
}
