// import { useRef, useState, type Dispatch, type SetStateAction } from "react";
// import { Button } from "../Button";
// import { CalculatorIcon } from "../../assets/Icon";
// import { Portal } from "../../utils/Portal";

// export interface DatePickerProps {
//   date: Date;

//   setDate: Dispatch<SetStateAction<Date>>;
//   fromDate: Date;
//   toDate: Date;
// }

// const DatePicker: React.FC<DatePickerProps> = ({
//   date,
//   setDate,
//   fromDate,
//   toDate,
// }) => {
//   const containerRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <Button
//         colorTheme="primary"
//         variants="solid"
//         onClick={() => {
//           setIsOpen((prev) => !prev);
//         }}
//       >
//         <CalculatorIcon size={24} />
//       </Button>
//       <div ref={containerRef}>
//         {" "}
//         <Portal
//           isOpen={isOpen}
//           onOutsideClick={() => {
//             setIsOpen(false);
//           }}
//           // customBackdrop="p-10 bg-red_100"
//           container={containerRef.current}
//         >
//           portal
//         </Portal>
//       </div>
//     </>
//   );
// };

// export default DatePicker;
