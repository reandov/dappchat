export default function Input({
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className="bg-transparent outline-none border-2 rounded-lg border-white focus:border-secondary valid:border-green-500 p-2"
    />
  );
}
