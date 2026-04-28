type FormData = {
  name: string;
  email: string;
  address: string;
};

type Props = {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function CheckoutForm({ form, setForm }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-lg space-y-4">
      <input
        className="w-full p-3 rounded-md border border-white/20 bg-transparent text-white placeholder:text-white/60"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        className="w-full p-3 rounded-md border border-white/20 bg-transparent text-white placeholder:text-white/60"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        name="address"
        className="w-full p-3 rounded-md border border-white/20 bg-transparent text-white placeholder:text-white/60"
        value={form.address}
        onChange={handleChange}
        placeholder="Address"
      />
    </div>
  );
}