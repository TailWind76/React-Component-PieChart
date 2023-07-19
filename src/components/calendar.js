import React, { useState } from 'react';
import { format, isSameDay, startOfMonth, addDays, addMonths, subMonths } from 'date-fns';
import styled from 'styled-components';
import { RiCalendar2Line } from 'react-icons/ri';

const CalendarWrapper = styled.div`
  font-family: Arial, sans-serif;
  overflow: hidden;
  height: ${(props) => (props.height ? props.height : '500px')};
  width: ${(props) => (props.width ? props.width : '700px')};
  background-color: #fff;
  border-radius: 35px;
  position: relative;
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
`;

const CalendarIcon = styled(RiCalendar2Line)`
  position: absolute;
  top: 70%;
  left: 1.5rem;
  transform: translateY(-50%);
  font-size: 2.5rem;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  transition: transform 0.3s ease-in-out;
  height: 100%;
`;

const DayCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 50%;
  border-radius: 50%;
  font-size: ${(props) => (props.dayCellFontSize ? props.dayCellFontSize : '1rem')};
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? props.backgroundColor : 'transparent')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: #fff;
  }
`;

const TodayMarker = styled.div`
  height: 50%;
  width: 50%;
  border-radius: 50%;
  background-color: #007bff;
  opacity: 0.5;
  pointer-events: none;
`;

const CurrentDayCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 50%;
  border-radius: 30%;
  font-size: ${(props) => (props.currentDayCellFontSize ? props.currentDayCellFontSize : '1.2rem')};
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
`;

const Calendar = ({ height, width, dayCellBackgroundColor, dayCellHoverBackgroundColor, currentDayCellBackgroundColor, dayCellFontSize, currentDayCellFontSize }) => {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState(null);
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);

  const today = new Date();
  const daysInMonth = 31; // For simplicity, we assume 31 days max.

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
    setIsPrev(true);
    setTimeout(() => setIsPrev(false), 300);
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
    setIsNext(true);
    setTimeout(() => setIsNext(false), 300);
  };

  return (
    <CalendarWrapper height={height} width={width}>
      <CalendarHeader>
        <CalendarIcon />
        <ArrowButton onClick={handlePrevMonth}>&lt;</ArrowButton>
        {format(currentMonth, 'MMMM yyyy')}
        <ArrowButton onClick={handleNextMonth}>&gt;</ArrowButton>
      </CalendarHeader>
      <CalendarGrid style={{ transform: isNext ? 'translateX(-100%)' : isPrev ? 'translateX(100%)' : 'none' }}>
        {Array.from({ length: daysInMonth }, (_, index) => addDays(currentMonth, index)).map((date) => {
          const isToday = isSameDay(today, date);
          return (
            <React.Fragment key={date.toISOString()}>
              {isToday ? (
                <CurrentDayCell
                  backgroundColor={currentDayCellBackgroundColor}
                  currentDayCellFontSize={currentDayCellFontSize}
                >
                  {format(date, 'd')}
                </CurrentDayCell>
              ) : (
                <DayCell
                  isSelected={isSameDay(date, selectedDate)}
                  backgroundColor={dayCellBackgroundColor}
                  hoverBackgroundColor={dayCellHoverBackgroundColor}
                  dayCellFontSize={dayCellFontSize}
                  onClick={() => handleDayClick(date)}
                >
                  {format(date, 'd')}
                </DayCell>
              )}
            </React.Fragment>
          );
        })}
      </CalendarGrid>
      {isSameDay(today, currentMonth) && <TodayMarker style={{ left: `${(today.getDate() - 1) * (100 / daysInMonth)}%` }} />}
    </CalendarWrapper>
  );
};

export default Calendar;