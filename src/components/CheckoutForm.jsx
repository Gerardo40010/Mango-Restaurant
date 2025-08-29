import { useState } from 'react';
const CheckoutForm = ({ cart, total, onClose, onOrderComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular proceso de pago
    setTimeout(() => {
      onOrderComplete();
    }, 2000);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Finalizar Compra</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre completo</label>
              <input
                type="text"
                required
                className="w-full p-3 border rounded-lg focus:border-orange-500 focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full p-3 border rounded-lg focus:border-orange-500 focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Dirección de envío</label>
              <textarea
                required
                rows={3}
                className="w-full p-3 border rounded-lg focus:border-orange-500 focus:outline-none"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input
                type="tel"
                required
                className="w-full p-3 border rounded-lg focus:border-orange-500 focus:outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Resumen del pedido</h3>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2 font-bold">
                <span>Total: ${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold"
              >
                Confirmar Pedido
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CheckoutForm;