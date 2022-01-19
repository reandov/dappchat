import Field from "../components/Form/Field";
import Input from "../components/Form/Input";
import Label from "../components/Form/Label";
import SubmitButton from "../components/Form/SubmitButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl text-secondary font-thin text-center mb-4">
        DAppChat
      </h1>
      <div className="flex flex-col items-center max-w-sm mx-auto">
        <Field>
          <Label htmlFor="username">Username:</Label>
          <Input id="username" type="text" minLength={4} required />
        </Field>
        <Field>
          <Label htmlFor="password">Password:</Label>
          <Input id="password" type="password" minLength={6} required />
        </Field>
        <Field className="max-w-full w-[215px]">
          <SubmitButton type="submit">Login</SubmitButton>
        </Field>
      </div>
    </div>
  );
}
