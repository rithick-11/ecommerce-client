import React from "react";

const FormControler = ({ data, value, handleFormData }) => {
  switch (data.element) {
    case "input":
      return (
        <div className="flex flex-col gap-[2px] text-sm border-b border-black/40">
          <label
            htmlFor={data.name + "id"}
            className="text-gray-700 font-semibold "
          >
            {data.label}{" "}
            {data.required && <span className="text-red-500">*</span>}
          </label>
          <input
            className="bg-transparent outline-none focus:bg-transparent"
            type={data.type}
            id={data.name + "id"}
            placeholder={data.placeholder}
            required={data.required}
            value={value}
            onChange={(e) => {
              handleFormData(e);
            }}
            name={data.name}
          />
        </div>
      );

    case "select":
      return (
        <div className="flex flex-col gap-[2px] text-sm border-b border-black/40">
          <label
            htmlFor={data.name + "id"}
            className="text-gray-700 font-semibold "
          >
            {data.label}{" "}
            {data.require && <span className="text-red-500">*</span>}
          </label>
          <select
            className="bg-transparent outline-none focus:bg-transparent"
            id={data.name + "id"}
            placeholder={data.placeholder}
            required={data.required}
            value={value}
            onChange={(e) => {
              handleFormData(e);
            }}  
            name={data.name}
          >
            {data.options.map((each) => (
              <option key={each} value={each}>
                {each}
              </option>
            ))}
          </select>
        </div>
      );

    case "textarea":
      return (
        <div className="flex flex-col gap-[2px] text-sm border-b border-black/40">
          <label
            htmlFor={data.name + "id"}
            className="text-gray-700 font-semibold "
          >
            {data.label}{" "}
            {data.required && <span className="text-red-500">*</span>}
          </label>
          <textarea
            rows={3}
            className="bg-transparent outline-none focus:bg-transparent"
            id={data.name + "id"}
            placeholder={data.placeholder}
            required={data.required}
            value={value}
            name={data.name}
            onChange={(e) => {
              handleFormData(e);
            }}
          />
        </div>
      );
    default:
      console.log(data);
      return <>default</>;
  }
};

export default FormControler;
