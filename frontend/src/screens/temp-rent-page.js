import React from "react";
import EmailInput from "../components/formInputs/emailInput";
import RegularInput from "../components/formInputs/regularInput";

// TODO(connor):
// - colors?

export default function TempRentPage() {
  const [email, setEmail] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [netID, setNetID] = React.useState("");
  const [pickupDate, setPickupDate] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [eventType, setEventType] = React.useState("");
  const [collegeMajor, setCollegeMajor] = React.useState("");
  const [dropOffDate, setDropOffDate] = React.useState("");
  const [errors, setErrors] = React.useState([]);

  const handleSubmit = () => {
    let errors = [];
    const fields = [
      email,
      fullName,
      netID,
      pickupDate,
      eventDate,
      eventType,
      collegeMajor,
      dropOffDate,
    ];

    for (let i = 0; i < fields.length; i++) {
      if (fields[i] === "") {
        errors.push("Please fill out all fields");
        break;
      }
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email");
    }

    const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
    if (
      !dateRegex.test(pickupDate) ||
      !dateRegex.test(dropOffDate) ||
      !dateRegex.test(eventDate)
    ) {
      errors.push("Please enter all dates in MM/DD/YYYY format");
    }

    setErrors(errors);
    if (errors.length === 0) {
      console.log("submitted form");
    }
  };

  return (
    <div className="py-10 max-w-screen-lg mx-auto">
      <div className="max-w-xs mx-auto grid gap-y-4">
        <EmailInput email={email} setEmail={setEmail} />
        <RegularInput
          label="Full Name"
          id="fullName"
          value={fullName}
          setValue={setFullName}
          placeholder={"Patrick Chen"}
        />
        <RegularInput
          label="NetID"
          id="netID"
          value={netID}
          setValue={setNetID}
          placeholder={"abc123"}
        />
        <RegularInput
          label="Desired Date of Pickup"
          id="pickupDate"
          value={pickupDate}
          setValue={setPickupDate}
          placeholder={"MM/DD/YYYY"}
        />
        <RegularInput
          label="Date of Event for Which Items are Requested"
          id="eventDate"
          value={eventDate}
          setValue={setEventDate}
          placeholder={"MM/DD/YYYY"}
        />
        <RegularInput
          label="Event Type"
          id="eventType"
          value={eventType}
          setValue={setEventType}
          placeholder={"Formal, Interview, etc."}
        />
        <RegularInput
          label="College and Major"
          id="collegeMajor"
          value={collegeMajor}
          setValue={setCollegeMajor}
          placeholder={"Engineer / Computer Science"}
        />
        <RegularInput
          label="Soonest Available Drop-off Date Following Event"
          id="dropOffDate"
          value={dropOffDate}
          setValue={setDropOffDate}
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
