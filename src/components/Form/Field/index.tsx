interface FieldProps {
  children: React.ReactNode;
  className?: string;
}

export default function Field({ children, className }: FieldProps) {
  return (
    <div className={`flex flex-col gap-1 my-4 + ${className}`}>{children}</div>
  );
}
