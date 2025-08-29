import { Toaster, toast } from 'react-hot-toast';
import { CheckCircle, XCircle, Info, Truck } from 'lucide-react';

export const ToastNotifications = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        success: {
          icon: <CheckCircle className="text-green-400" />,
        },
        error: {
          icon: <XCircle className="text-red-400" />,
        },
        loading: {
          icon: <Truck className="text-orange-400 animate-pulse" />,
        },
      }}
    />
  );
};

export const showToast = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  loading: (message) => toast.loading(message),
  custom: (message, icon) => toast(message, { icon }),
};