import React from "react";
import RentPageZero from "../components/formPages/rent-page-zero";
import RentPageItems from "../components/formPages/rent-page-items";

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
      numberOfItems: "1",
      items: [],
    }
  );
  const [errors, setErrors] = React.useState([]);

   if (page === 0) {
    return (
      <RentPageZero page={page} setPage={setPage} formValues={formValues} setFormValues={setFormValues} errors={errors} setErrors={setErrors}/>
    )
   } else if (page === 1) {
    return (
      <RentPageItems page={page} setPage={setPage} formValues={formValues} setFormValues={setFormValues} errors={errors} setErrors={setErrors}/>
    )
   } else if (page === 2) {
    if (formValues.numberOfItems > 1) {
      return (
        <RentPageItems page={page} setPage={setPage} formValues={formValues} setFormValues={setFormValues} errors={errors} setErrors={setErrors}/>
      )
    } else {
      return <div>end</div>
    }
   } else if (page === 3) {
    if (formValues.numberOfItems > 2) {
      return (
        <RentPageItems page={page} setPage={setPage} formValues={formValues} setFormValues={setFormValues} errors={errors} setErrors={setErrors}/>
      )
    } else {
      return <div>end</div>
    }
   } else {
    return <div>end</div>
   }
}
