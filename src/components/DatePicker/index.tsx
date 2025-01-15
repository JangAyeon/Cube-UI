import { useRef, useState } from "react";
import { Button } from "../Button";
import { CalendarIcon } from "../../assets/Icon";
import { Portal } from "../../utils/Portal";
import { type DatePickerProps } from "./DatePicker.types";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
const DatePicker: React.FC<DatePickerProps> = ({
  date,
  setDate,
  fromDate,
  toDate,
}) => {
  console.log("Date Picker", date);
  console.log("from date", fromDate);
  console.log("to date", toDate);
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleDateSelected = (e: Date): void => {
    setDate(e);
  };
  return (
    <div>
      {date.toLocaleDateString()}
      <Button
        colorTheme="primary"
        variants="solid"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <CalendarIcon size={24} />
      </Button>
      <div ref={containerRef} className="w-fit">
        {" "}
        <Portal
          isOpen={isOpen}
          onOutsideClick={() => {
            setIsOpen(false);
          }}
          customBackdrop="p-10 bg-transparent"
          container={containerRef.current}
        >
          <DayPicker
            mode="single"
            selected={new Date(date)}
            onSelect={(e) => e && handleDateSelected(e)}
            disabled={{
              before: new Date(fromDate),
              after: new Date(toDate),
            }}
          />
        </Portal>
      </div>
    </div>
  );
};

export default DatePicker;
