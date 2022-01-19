export default function Label({
  ...rest
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...rest} className="text-white font-semibold text-md" />;
}
