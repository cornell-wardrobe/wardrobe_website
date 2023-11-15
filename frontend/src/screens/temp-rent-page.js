import React from "react";
import RentPageZero from "../components/formPages/rent-page-zero";

export default function TempRentPage() {
  const [page, setPage] = React.useState(0);
  const [formValues, setFormValues] = React.useState(
    {
      email: "",
      fullName: "",
      netID: "",
      pickupDate: "",
      eventDate: "",
      eventType: "",
      collegeMajor: "",
      dropOffDate: "",
    }
  );
  const [errors, setErrors] = React.useState([]);

   if (page === 0) {
    return (
      <RentPageZero setPage={setPage} formValues={formValues} setFormValues={setFormValues} errors={errors} setErrors={setErrors}/>
    )
   }

   return <div>no pages - sad</div>
}
