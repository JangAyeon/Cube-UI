import { type Meta } from "@storybook/react";
import DatePicker from ".";
import { useState } from "react";

const meta: Meta = {
  title: "Components/DatePicker", // Storybook 내에서 컴포넌트가 표시될 경로
};

export default meta;

export const Default: React.FC = () => {
  const INITIAL_DATE = new Date();
  const fromDate = // 이주일 전 구하기
    new Date(new Date().setDate(new Date().getDate() - 14));
  const toDate = // 이주일 전 구하기
    new Date(new Date().setDate(new Date().getDate() + 14));
  const [selectedDate, setSelectedDate] = useState<Date>(INITIAL_DATE);

  return (
    <DatePicker
      date={selectedDate}
      setDate={setSelectedDate}
      fromDate={fromDate}
      toDate={toDate}
    />
  );
};
