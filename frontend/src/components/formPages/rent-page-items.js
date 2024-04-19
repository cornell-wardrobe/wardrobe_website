import React from "react";
import RegularInput from "../formInputs/regularInput";
import DropDownInput from "../formInputs/dropdownInput";

export default function RentPageItems({page, setPage, formValues, setFormValues, errors, setErrors}) {
  const [currItem, setCurrItem] = React.useState(
    {
      gender: "Male",
      itemType: "",
      size: "",
      color: "",
    }
  );

  const defaultItem = {
    gender: "Male",
    itemType: "",
    size: "",
    color: "",
  }

  const handleSubmit = () => {
    let errors = [];

    for (let i = 0; i < 4; i++) {
      if (currItem[Object.keys(currItem)[i]] === "") {
        errors.push("Please fill out all fields");
        break;
      }
    }

    const intRegex = /^\d+$/;
    if (!intRegex.test(currItem.size)) {
      errors.push("Please enter a valid size");
    }

    setErrors(errors);
    if (errors.length === 0) {
      console.log("submitted form");
      const fields = formValues;
      fields.items.push(currItem);
      setFormValues(fields);
      setCurrItem(defaultItem);
      console.log(formValues);
      setPage(page+1)
    }
  };

  return (
    <div className="py-10 max-w-screen-lg mx-auto">
      <div className="max-w-xs mx-auto grid gap-y-4">
          <DropDownInput
          label="Gender of Clothing"
          id="gender"
          value={currItem.gender}
          form={currItem}
          setValue={setCurrItem}
          options={["Male","Female"]}
          />
          <RegularInput
          label="Item Type"
          id="itemType"
          value={currItem.itemType}
          form={currItem}
          setValue={setCurrItem}
          placeholder={"Suit Jacket"}
          />
          <RegularInput
          label="Size"
          id="size"
          value={currItem.size}
          form={currItem}
          setValue={setCurrItem}
          placeholder={"36"}
          />
          <RegularInput
          label="Color"
          id="color"
          value={currItem.color}
          form={currItem}
          setValue={setCurrItem}
          placeholder={"Black"}
          />
          {errors.map((error) => (
          <p className="mt-2 text-sm text-red-600">{error}</p>
          ))}
          <button
          type="button"
          className="rounded-md bg-blue-700 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmit}
          >
          Next
          </button>
      </div>
    </div>
  );
}
