export default function RegularInput({
  label,
  id,
  placeholder,
  form,
  value,
  setValue,
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name={id}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue({...form, [id]: e.target.value})}
        />
      </div>
    </div>
  );
}
