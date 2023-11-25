const FormInput = ({
  label,
  id,
  name,
  type = "text",
  required = false,
  defaultValue,
}: {
  label: string;
  id: string;
  name: string;
  type?: "text" | "date" | "number" | "email";
  required?: boolean;
  defaultValue?: string | number;
}) => {
  return (
    <div className="py-3 grid grid-cols-3 max-w-xl items-center">
      <label htmlFor={id} className="text-gray-900">
        {label}
        {required && <span className="text-rose-700">*</span>}
      </label>
      <input
        type={type}
        placeholder={`Input ${label}`}
        id={id}
        name={name}
        className="col-span-2 bg-gray-200 px-3 h-10 rounded-md focus-visible:outline-1 focus-visible:outline-gray-400"
        required={required}
        step={"0.1"}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;
