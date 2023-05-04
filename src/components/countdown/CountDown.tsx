import React, { useEffect } from "react";
import {
  setDays,
  setHours,
  setMinutes,
  setSeconds,
} from "../../features/countdown/countDownSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../redux/store";
import { RxLapTimer } from "react-icons/rx";

const CountDown = () => {
  const dispatch = useAppDispatch();
  const time = useAppSelector((state: RootState) => state.countDownSlice);

  useEffect(() => {
    const target = new Date("05/12/2023 18:27:00");
    const interval = setInterval(() => {
      const now = new Date();
      let diff = target.getTime() - now.getTime();
      dispatch(setDays(diff));
      dispatch(setHours(diff));
      dispatch(setMinutes(diff));
      dispatch(setSeconds(diff));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="count-down">
      <div className="count-down__container">
        <h2 className="count-down__title">Kolekcja dostępna za:</h2>
        <div className="count-down__content">
          <RxLapTimer />
          <div className="count-down__time-container">
            <p className="count-down__days">{time.days}</p>
            <p className="count-down__desc">Dni</p>
          </div>
          <div className="count-down__time-container">
            <p className="count-down__hours">{time.hours}</p>
            <p className="count-down__desc">Godzin</p>
          </div>
          <div className="count-down__time-container">
            <p className="count-down__minutes">{time.minutes}</p>
            <p className="count-down__desc">Minut</p>
          </div>
          <div className="count-down__time-container">
            <p className="count-down__seconds">{time.seconds}</p>
            <p className="count-down__desc">Sekund</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
