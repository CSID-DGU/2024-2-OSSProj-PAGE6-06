import { useEffect, useState } from "react";
import * as RS from "./Styled";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

export default function RecordCalendar({ data, isSelect, setIsSelect }) {
  const [calendarDate, setCalendarDate] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const goPrevMonth = () => {
    setDirection(-1);
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      setCurrentDate(newDate);
      // setIsSelect(newDate);
      return newDate;
    });
  };

  const goNextMonth = () => {
    setDirection(1);
    setCurrentDate((next) => {
      const newDate = new Date(next);
      newDate.setMonth(next.getMonth() + 1);
      setCurrentDate(newDate);
      // setIsSelect(newDate);
      return newDate;
    });
  };

  const handleDateClick = (date) => {
    setIsSelect(date);
  };

  useEffect(() => {
    handleDateClick(currentDate);
  }, [currentDate]);

  const getCalendarData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDatOfMonth = new Date(year, month, 1);
    const startDate = new Date(firstDatOfMonth);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const lastDayOfMonth = new Date(year, month + 1, 0);
    const endDate = new Date(lastDayOfMonth);
    endDate.setDate(endDate.getDate() - endDate.getDay());

    const calendarDate = [];
    let current = new Date(startDate);

    while (current <= lastDayOfMonth) {
      calendarDate.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return calendarDate;
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const isSameMonth = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth()
    );
  };

  useEffect(() => {
    const dates = getCalendarData();
    setCalendarDate(dates);
    setLoading(false);
  }, [currentDate]);

  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(0);

  return (
    <RS.RecordCalendarContainer>
      <RS.RecordCalendarMonth>
        <RS.RecordCalendarButton
          icon={faCaretLeft}
          onClick={() => goPrevMonth()}
        />
        {currentDate.getMonth() + 1}월
        <RS.RecordCalendarButton
          icon={faCaretRight}
          onClick={() => goNextMonth()}
        />
      </RS.RecordCalendarMonth>
      <RS.RecordCalendarWeek>
        {week.map((day, idx) => (
          <RS.RecordCalendartWeekText key={idx}>
            {day}
          </RS.RecordCalendartWeekText>
        ))}
      </RS.RecordCalendarWeek>
      {!loading && (
        <AnimatePresence mode="wait">
          <motion.div
            style={{ width: "100%" }}
            key={currentDate}
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <RS.RecordCalenderDay>
              {calendarDate.map((date, idx) => {
                const currentDateString = date.toDateString();
                const matchingDate = data.find(
                  (item) =>
                    currentDateString === new Date(item.date).toDateString()
                );
                const percent = matchingDate ? 100 : 0;

                return (
                  <RS.RecordCalendDayText
                    key={idx}
                    onClick={() => handleDateClick(date)}
                    $isActive={isSameDay(isSelect, date)}
                    $isCurrentMonth={isSameMonth(currentDate, date)}
                    $percent={percent}
                  >
                    {date.getDate()}
                  </RS.RecordCalendDayText>
                );
              })}
            </RS.RecordCalenderDay>
          </motion.div>
        </AnimatePresence>
      )}
    </RS.RecordCalendarContainer>
  );
}
