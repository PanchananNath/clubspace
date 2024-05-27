import React from "react";
import { Calendar, DateValue } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
export default function ClubCalendar() {
  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = React.useState<DateValue>(defaultDate);
  return (
    <div className="absolute right-0 z-50">
      <Calendar
        aria-label="Date (Controlled Focused Value)"
        focusedValue={focusedDate}
        value={defaultDate}
        onFocusChange={setFocusedDate}
        date-focused={focusedDate}
        style={{
          accentColor: "#A0DEFF",
          color: "#0C134F",
          backgroundColor: "#CAF4FF",
          borderRadius: "10px",
          boxShadow: "5px 25px 20px 0 rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
}
