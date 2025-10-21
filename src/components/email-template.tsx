export type template = {
  name: string;
  message: string;
  email: string;
};

export function EmailTemplate({ name, message, email }: template) {
  return (
    <div className="w-full p-10 bg-gray-400 ">
      <h1 className="text-xl">Message from {name}! </h1>
      <p className="text-lg"> {message}</p>
      <p>
        Their email is <span> {email}</span>{" "}
      </p>
    </div>
  );
}
