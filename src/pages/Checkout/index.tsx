import { ShoppingCart } from '../../components/ShoppingCart';
import { PurchaseForm } from '../../components/PurchaseForm';
import { PaymentMethodPicker } from '../../components/PaymentMethodPicker';

export const Checkout = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 mt-16 p-2">
      <div>
        <h3 className="font-semibold font-['Baloo_2'] text-lg">Complete seu pedido</h3>
        <PurchaseForm />
        <PaymentMethodPicker />
      </div>
      <div>
        <h3 className="font-semibold font-['Baloo_2'] text-lg">Cafés selecionados</h3>
        <ShoppingCart />
      </div>
    </section>
  );
};
