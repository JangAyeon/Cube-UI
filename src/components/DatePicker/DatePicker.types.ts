import { type Dispatch, type SetStateAction } from "react";

export interface DatePickerProps {
  date: Date;

  setDate: Dispatch<SetStateAction<Date>>;
  fromDate: Date;
  toDate: Date;
}
