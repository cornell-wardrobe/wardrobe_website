import React from "react";
import EmailInput from "../formInputs/emailInput";
import RegularInput from "../formInputs/regularInput";

export default function RentPageZero({setPage, formValues, setFormValues, errors, setErrors}) {
  const handleSubmit = () => {
    let errors = [];
    const fields = formValues;

    for (let i = 0; i < fields.length; i++) {
      if (fields[i] === "") {
        errors.push("Please fill out all fields");
        break;
      }
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(fields.email)) {
      errors.push("Please enter a valid email");
    }

    const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
    if (
      !dateRegex.test(fields.pickupDate) ||
      !dateRegex.test(fields.dropOffDate) ||
      !dateRegex.test(fields.eventDate)
    ) {
      errors.push("Please enter all dates in MM/DD/YYYY format");
    }
    
    setErrors(errors);
    if (errors.length === 0) {
      console.log("submitted form");
    }
    setPage(1)
  };

  return (
    <div className="py-10 max-w-screen-lg mx-auto">
      <div className="max-w-xs mx-auto grid gap-y-4">
          <EmailInput email={formValues.email} setEmail={setFormValues} form={formValues} />
          <RegularInput
          label="Full Name"
          id="fullName"
          value={formValues.fullName}
          form={formValues}
          setValue={setFormValues}
          placeholder={"Patrick Chen"}
          />
          <RegularInput
          label="NetID"
          id="netID"
          value={formValues.netID}
          setValue={setFormValues}
          placeholder={"abc123"}
          />
          <RegularInput
          label="Desired Date of Pickup"
          id="pickupDate"
          value={formValues.pickupDate}
          setValue={setFormValues}
          placeholder={"MM/DD/YYYY"}
          />
          <RegularInput
          label="Date of Event for Which Items are Requested"
          id="eventDate"
          value={formValues.eventDate}
          setValue={setFormValues}
          placeholder={"MM/DD/YYYY"}
          />
          <RegularInput
          label="Event Type"
          id="eventType"
          value={formValues.eventType}
          setValue={setFormValues}
          placeholder={"Formal, Interview, etc."}
          />
          <RegularInput
          label="College and Major"
          id="collegeMajor"
          value={formValues.collegeMajor}
          setValue={setFormValues}
          placeholder={"Engineer / Computer Science"}
          />
          <RegularInput
          label="Soonest Available Drop-off Date Following Event"
          id="dropOffDate"
          value={formValues.dropOffDate}
          setValue={setFormValues}
          placeholder={"MM/DD/YYYY"}
          />
          {errors.map((error) => (
          <p class="mt-2 text-sm text-red-600">{error}</p>
          ))}
          <button
          type="button"
          class="rounded-md bg-blue-700 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmit}
          >
          Next
          </button>
      </div>
    </div>
  );
}
