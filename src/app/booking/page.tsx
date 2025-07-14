"use client";
import styles from "./page.module.css";
import { SetStateAction, Dispatch, useState } from "react";
import clsx from "clsx";
import Buttons from "../components/Buttons/Buttons";
import Modal from "../components/Modal/Modal";
import Counter from "../components/Counter/Counter";
import { getAllDaysInMonth } from "../lib/getAllDaysInMonth";
import Header from "../components/Header/Header";

export default function Booking() {
  const [glampingIsOpen, setGlampingIsOpen] = useState(false);
  const [selectGlampingButton, setSelectGlampingButton] = useState<
    number | null
  >(null);
  const [housesIsOpen, setHousesIsOpen] = useState(false);
  const [selectHouseButton, setSelectHouseButton] = useState<number | null>(
    null
  );
  const [guestsIsOpen, setGuestsIsOpen] = useState(false);
  const [dateOfStayIsOpen, setDateOfStayIsOpen] = useState(false);
  const [date, setDate] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

  const nextMonth = () => {
    setDate(({ month, year }) =>
      month === 11 ? { month: 0, year: year + 1 } : { month: month + 1, year }
    );
  };

  const prevMonth = () => {
    setDate(({ month, year }) =>
      month === 0 ? { month: 11, year: year - 1 } : { month: month - 1, year }
    );
  };
  const listOfDays = getAllDaysInMonth(date.month, date.year);
  const shortWeekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const getWeekDayMondayFirst = (date: Date) => {
    const day = date.getDay();
    return day === 0 ? 6 : day - 1;
  };

  const firstDayIndex = getWeekDayMondayFirst(listOfDays[0]);
  const emptySlots = [];
  for (let i = 0; i < firstDayIndex; i++) {
    emptySlots.push(
      <span key={"empty-" + i} className={styles.booking_calendar_empty_slot} />
    );
  }

  const listOfHouses = [
    "The Rocky Mountain Bunk House",
    "The Sequoia",
    "The Dogwood",
    "The Cheyenne",
    "The Rocky Mtn High",
    "The Rusty Aspen",
    "The Sage Park",
    "The Open Sol",
    "The Pop Top",
  ];

  const handleSelect = (
    index: number,
    setSelect: (value: SetStateAction<number | null>) => void,
    setOpen: (value: SetStateAction<boolean>) => void
  ) => {
    setSelect((prev) => (prev === index ? null : index));
    setOpen(false);
  };

  const toogleModal = (setModal: Dispatch<SetStateAction<boolean>>) => {
    setModal((prev: boolean) => !prev);
  };

  const handleDayClick = (day: Date) => {
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(day);
      setRangeEnd(null);
    } else if (rangeStart && !rangeEnd) {
      if (day < rangeStart) {
        setRangeStart(day);
        setRangeEnd(rangeStart);
        setDateOfStayIsOpen(false);
      } else {
        setRangeEnd(day);
        setDateOfStayIsOpen(false);
      }
    }
  };

  // const closeDateModal = () => {
  //   setRangeStart(null);
  //   setRangeEnd(null);
  //   setDateOfStayIsOpen(false);
  // };

  const isSameDay = (a: Date, b: Date) =>
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear();

  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.booking}>
          <h1 className={styles.booking_title}>Relax with tinyarc</h1>
          <div className={styles.booking_form_wrapper}>
            <h3 className={styles.booking_form_title}>
              Hurry up to book accommodation at great prices
            </h3>

            <ul className={styles.booking_form}>
              <li
                onClick={() => toogleModal(setGlampingIsOpen)}
                className={styles.booking_form_select}
              >
                <span className={styles.booking_form_select_text}>
                  {selectGlampingButton
                    ? `(#${selectGlampingButton})`
                    : "Glamping"}
                </span>
                <svg
                  className={clsx(
                    glampingIsOpen && styles.booking_form_select_icon_rotate,
                    styles.booking_form_select_icon
                  )}
                  width="12"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4198 0.269317L13.4798 1.68398L7.70277 9.38932C7.6102 9.51352 7.50012 9.61209 7.37887 9.67936C7.25762 9.74662 7.12759 9.78125 6.99627 9.78125C6.86494 9.78125 6.73491 9.74662 6.61366 9.67936C6.49241 9.61209 6.38233 9.51352 6.28977 9.38932L0.509766 1.68398L1.56977 0.27065L6.99477 7.50265L12.4198 0.269317Z"
                    fill="black"
                  />
                </svg>
              </li>
              <li
                onClick={() => toogleModal(setHousesIsOpen)}
                className={styles.booking_form_select}
              >
                <span className={styles.booking_form_select_text}>
                  {selectHouseButton
                    ? `${
                        listOfHouses[selectHouseButton - 1]
                      } (#${selectHouseButton})`
                    : "Houses"}
                </span>
                <svg
                  className={clsx(
                    housesIsOpen && styles.booking_form_select_icon_rotate,
                    styles.booking_form_select_icon
                  )}
                  width="12"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4198 0.269317L13.4798 1.68398L7.70277 9.38932C7.6102 9.51352 7.50012 9.61209 7.37887 9.67936C7.25762 9.74662 7.12759 9.78125 6.99627 9.78125C6.86494 9.78125 6.73491 9.74662 6.61366 9.67936C6.49241 9.61209 6.38233 9.51352 6.28977 9.38932L0.509766 1.68398L1.56977 0.27065L6.99477 7.50265L12.4198 0.269317Z"
                    fill="black"
                  />
                </svg>
              </li>

              <li
                onClick={() => toogleModal(setGuestsIsOpen)}
                className={styles.booking_form_select}
              >
                <span className={styles.booking_form_select_text}>Guests</span>
                <svg
                  className={clsx(
                    guestsIsOpen && styles.booking_form_select_icon_rotate,
                    styles.booking_form_select_icon
                  )}
                  width="12"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4198 0.269317L13.4798 1.68398L7.70277 9.38932C7.6102 9.51352 7.50012 9.61209 7.37887 9.67936C7.25762 9.74662 7.12759 9.78125 6.99627 9.78125C6.86494 9.78125 6.73491 9.74662 6.61366 9.67936C6.49241 9.61209 6.38233 9.51352 6.28977 9.38932L0.509766 1.68398L1.56977 0.27065L6.99477 7.50265L12.4198 0.269317Z"
                    fill="black"
                  />
                </svg>
              </li>
              <li
                onClick={() => toogleModal(setDateOfStayIsOpen)}
                className={styles.booking_form_select}
              >
                <span className={styles.booking_form_select_text}>
                  Date of stay
                </span>
                <svg
                  className={clsx(
                    styles.booking_form_select_icon,
                    dateOfStayIsOpen && styles.booking_form_select_icon_rotate
                  )}
                  width="12"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4198 0.269317L13.4798 1.68398L7.70277 9.38932C7.6102 9.51352 7.50012 9.61209 7.37887 9.67936C7.25762 9.74662 7.12759 9.78125 6.99627 9.78125C6.86494 9.78125 6.73491 9.74662 6.61366 9.67936C6.49241 9.61209 6.38233 9.51352 6.28977 9.38932L0.509766 1.68398L1.56977 0.27065L6.99477 7.50265L12.4198 0.269317Z"
                    fill="black"
                  />
                </svg>
              </li>
            </ul>
            <button className={styles.booking_form_button}>Find</button>
          </div>
        </section>
      </main>

      <Modal className={styles.booking_houses_wrapper} isOpen={glampingIsOpen}>
        <Buttons
          onSelect={selectGlampingButton}
          onChoose={handleSelect}
          setSelected={setSelectGlampingButton}
          setOpen={setGlampingIsOpen}
          length={9}
          content={[]}
        />
      </Modal>

      <Modal className={styles.booking_houses_wrapper} isOpen={housesIsOpen}>
        <Buttons
          onSelect={selectHouseButton}
          onChoose={handleSelect}
          setSelected={setSelectHouseButton}
          setOpen={setHousesIsOpen}
          length={9}
          content={listOfHouses}
        />
      </Modal>
      <Modal
        className={clsx(styles.booking_houses_wrapper, styles.booking_guests)}
        isOpen={guestsIsOpen}
      >
        <div className={styles.booking_guests_text_wrapper}>
          <h3 className={styles.booking_guests_title}>Adults</h3>
          <span className={styles.booking_guests_text}>from 18 y.o</span>
        </div>
        <Counter />
        <div className={styles.booking_guests_text_wrapper}>
          <h3 className={styles.booking_guests_title}>Сhildren</h3>
          <span className={styles.booking_guests_text}>from 0 to 17 y.o</span>
        </div>
        <Counter />
        <button
          onClick={() => setGuestsIsOpen(false)}
          className={styles.booking_guests_button}
        >
          Choose
        </button>
      </Modal>

      <Modal
        className={clsx(styles.booking_houses_wrapper, styles.booking_calendar)}
        isOpen={dateOfStayIsOpen}
      >
        <div className={styles.booking_calendar_nav}>
          <button
            className={styles.booking_calendar_nav_button}
            disabled={
              date.month === new Date().getMonth() &&
              date.year === new Date().getFullYear()
            }
            onClick={prevMonth}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5L10 0V1.05078L2.16016 4.9707L10 8.89062V10L0 5Z"
                fill="#222020"
              />
            </svg>
          </button>

          <div>
            <span className={styles.booking_calendar_nav_text}>
              {listOfDays[0].toLocaleDateString("en-US", { month: "long" })}{" "}
              {date.year}
            </span>
          </div>

          <button
            className={styles.booking_calendar_nav_button}
            onClick={nextMonth}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5L0 10L0 8.94922L7.83984 5.0293L0 1.10938L0 0L10 5Z"
                fill="#222020"
              />
            </svg>
          </button>
        </div>

        <div className={styles.calendar_weekdays}>
          {shortWeekdays.map((dayOfWeek) => {
            const isWeekend = ["Sa", "Su"].includes(dayOfWeek);
            return (
              <span
                key={dayOfWeek}
                className={clsx(
                  styles.booking_calendar_day_of_week_text,
                  isWeekend && styles.booking_calendar_weekend
                )}
              >
                {dayOfWeek}
              </span>
            );
          })}
        </div>

        <div className={styles.calendar_days}>
          {emptySlots}
          {listOfDays.map((dayOfMonth) => {
            const isStart = rangeStart && isSameDay(dayOfMonth, rangeStart);
            const isEnd = rangeEnd && isSameDay(dayOfMonth, rangeEnd);

            return (
              <span
                onClick={() => handleDayClick(dayOfMonth)}
                key={dayOfMonth.toISOString()}
                className={clsx(
                  styles.booking_calendar_day_of_month,
                  styles.booking_calendar_day_of_month_text,
                  isStart && styles.booking_calendar_day_of_month_start,
                  isEnd && styles.booking_calendar_day_of_month_end
                )}
              >
                {dayOfMonth.getDate()}
              </span>
            );
          })}
        </div>
      </Modal>
    </>
  );
}
