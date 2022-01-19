export interface SubmitButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export default function SubmitButton(props: SubmitButtonProps) {
  const { children, ...rest } = props;

  return (
    <button
      {...rest}
      className="bg-green-700 hover:bg-green-500 duration-200 text-white hover:text-primary font-bold p-2"
    >
      {children}
    </button>
  );
}
