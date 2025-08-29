import { useState } from 'react';
import OrderConfirmation from './OrderConfirmation';

const CartModal = ({ cart, updateQuantity, removeFromCart, onClose }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [orderData, setOrderData] = useState({ name: '', phone: '', address: '' });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = total * 0.10;
  const finalTotal = total + tax;

  const generateOrderNumber = () => {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsCheckout(true);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    
    // Generar número de orden
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    
    // Mostrar confirmación
    setShowConfirmation(true);
    
    // Limpiar carrito después de 3 segundos (simulación)
    setTimeout(() => {
      localStorage.removeItem('mangoCart');
      // onClose(); // Opcional: cerrar el modal automáticamente
    }, 3000);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setIsCheckout(false);
    setOrderData({ name: '', phone: '', address: '' });
    onClose(); // Cerrar el modal del carrito
  };

  if (cart.length === 0 && !isCheckout) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <span className="text-6xl">🛒</span>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">Carrito Vacío</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Agrega algunos productos deliciosos</p>
            <button 
              onClick={onClose}
              className="bg-orange-500 text-white px-6 py-3 rounded-full mt-6 hover:bg-orange-600 transition-colors"
            >
              Seguir Comprando
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              {isCheckout ? 'Finalizar Pedido' : 'Mi Carrito'}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          {!isCheckout ? (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border dark:border-gray-600 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div>
                        <h4 className="font-semibold dark:text-white">{item.name}</h4>
                        <p className="text-orange-600 font-bold">${item.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-200 dark:bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500"
                      >
                        -
                      </button>
                      <span className="font-semibold dark:text-white">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-200 dark:bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-500 hover:text-red-700 dark:hover:text-red-400"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t dark:border-gray-600 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="dark:text-gray-300">Subtotal:</span>
                  <span className="font-semibold dark:text-white">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="dark:text-gray-300">Impuestos (10%):</span>
                  <span className="font-semibold dark:text-white">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-orange-600">
                  <span>Total:</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-orange-500 text-white py-4 rounded-lg mt-6 hover:bg-orange-600 transition-colors font-semibold text-lg"
              >
                Finalizar Compra
              </button>
            </>
          ) : (
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre completo</label>
                <input
                  type="text"
                  required
                  value={orderData.name}
                  onChange={(e) => setOrderData({...orderData, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-orange-200 dark:border-orange-600 rounded-lg focus:border-orange-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Teléfono</label>
                <input
                  type="tel"
                  required
                  value={orderData.phone}
                  onChange={(e) => setOrderData({...orderData, phone: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-orange-200 dark:border-orange-600 rounded-lg focus:border-orange-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                  placeholder="Tu número de teléfono"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Dirección de entrega</label>
                <textarea
                  required
                  value={orderData.address}
                  onChange={(e) => setOrderData({...orderData, address: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-orange-200 dark:border-orange-600 rounded-lg focus:border-orange-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                  rows="3"
                  placeholder="Dirección completa para la entrega"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setIsCheckout(false)}
                  className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                >
                  Volver al Carrito
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                >
                  Confirmar Pedido
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Mostrar confirmación de pedido */}
      {showConfirmation && (
        <OrderConfirmation 
          orderNumber={orderNumber}
          onClose={handleCloseConfirmation}
        />
      )}
    </>
  );
};

export default CartModal;