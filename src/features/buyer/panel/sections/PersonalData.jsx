import BuyerForm from '@/components/ui/buyer-form/BuyerForm.jsx';

export default function UserProfileFormik() {
  const userData = {
    name: 'Anthony Hopkins',
    birthDate: 'December 31, 1937',
    phone: '+380 98 889 82 22',
    email: 'ivan@anthony1937@gmail.com',
  };

  const addressData = {
    country: 'Great Britan',
    city: 'Margam',
    address: '20 Ffordd Derwen',
  };

  return (
    <>
      <BuyerForm title="User data" initialData={userData} />
      <BuyerForm title="Address data" initialData={addressData} />
    </>
  );
}
