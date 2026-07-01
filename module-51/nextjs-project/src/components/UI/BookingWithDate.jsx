"use client";
import {
  Button,
  DateField,
  Description,
  FieldError,
  Label,
} from "@heroui/react";

const BookingWithDate = (id) => {
  const handleBooking = () => {
    const res = fetch(`http://localhost:5000/booking/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <div className="max-w-md">
      <DateField>
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
        <Description />
        <FieldError />
      </DateField>
      <Button fullWidth>Book Now</Button>
    </div>
  );
};
export default BookingWithDate;
