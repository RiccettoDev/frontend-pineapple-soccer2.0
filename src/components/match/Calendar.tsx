import { useState } from "react"
import { FirstDayMonth } from "../../services/firstDayMonth"
import ModalMatch from "./ModalMatch"

export default function Calendar() {
  const [visible, setVisible] = useState(false)

  const toggleModal = () => {
    setVisible(!visible)
  }

  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const day = currentDate.getDate()

  const dayOfTheWeekNumber = currentDate.getDay();

  let dayOfTheWeek

  switch (dayOfTheWeekNumber) {
    case 0:
      dayOfTheWeek = "Dom";
      break;
    case 1:
      dayOfTheWeek = "Seg";
      break;
    case 2:
      dayOfTheWeek = "Ter";
      break;
    case 3:
      dayOfTheWeek = "Quar";
      break;
    case 4:
      dayOfTheWeek = "Quin";
      break;
    case 5:
      dayOfTheWeek = "Sex";
      break;
    case 6:
      dayOfTheWeek = "Sáb";
      break;
    default:
      dayOfTheWeek = "Day invalid";
  }

  const monthNumber = currentDate.getMonth();

  let monthText

  switch (monthNumber) {
    case 0:
      monthText = "Jan";
      break;
    case 1:
      monthText = "Fev";
      break;
    case 2:
      monthText = "Mar";
      break;
    case 3:
      monthText = "Abr";
      break;
    case 4:
      monthText = "Mai";
      break;
    case 5:
      monthText = "Jun";
      break;
    case 6:
      monthText = "Jul";
      break;
    case 7:
      monthText = "Ago";
      break;
    case 8:
      monthText = "Set";
      break;
    case 9:
      monthText = "Out";
      break;
    case 10:
      monthText = "Nov";
      break;
    case 11:
      monthText = "Dez";
      break;
    default:
      monthText = "Month invalid";
  }

  let monthDays

  switch (month) {
    case 1:
      monthDays = 31;
      break;
    case 2:
      monthDays = 28;
      break;
    case 3:
      monthDays = 31;
      break;
    case 4:
      monthDays = 30;
      break;
    case 5:
      monthDays = 31;
      break;
    case 6:
      monthDays = 30;
      break;
    case 7:
      monthDays = 31;
      break;
    case 8:
      monthDays = 31;
      break;
    case 9:
      monthDays = 30;
      break;
    case 10:
      monthDays = 31;
      break;
    case 11:
      monthDays = 30;
      break;
    case 12:
      monthDays = 31;
      break;
    default:
      monthDays = 0;
  }

  return (
    <div className="w-[90%] h-[420px] bg-slate-700 rounded-xl mt-6 mb-6 lg:w-[70%] lg:h-[820px] custom:w-[35%]">
      <div className="w-full h-[25%] flex items-center justify-center bg-lime-500 rounded-t-xl lg:h-[15%]">
        <h1 className="text-lime-600 font-extrabold text-3xl lg:text-6xl">
          <span className="text-2xl text-lime-700 mx-4 lg:text-5xl">{year} </span>{dayOfTheWeek} {day} <span className="text-3xl text-lime-700 mx-4 lg:text-5xl">{monthText}</span></h1>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full mx-8 gap-9 mt-2 lg:gap-24 lg:m-5 lg:ml-24">
          <h1 className="text-white font-extrabold lg:text-2xl">D</h1>
          <h1 className="text-white font-extrabold lg:text-2xl">S</h1>
          <h1 className="text-white font-extrabold lg:text-2xl">T</h1>
          <h1 className="text-white font-extrabold lg:text-2xl">Q</h1>
          <h1 className="text-white font-extrabold lg:text-2xl">Q</h1>
          <h1 className="text-white font-extrabold lg:text-2xl">S</h1>
          <h1 className="text-white font-extrabold lg:text-2xl">S</h1>
        </div>
        <div className="flex flex-wrap w-full items-center justify-center -mb-[-90px] p-1 lg:gap-7">
          {(() => {
            const elements = [];
            let dayNumber = 0;
            let passed31 = false; // Flag para indicar se já passamos pelo dia 31

            for (let index = 0; index < 42; index++) {
              if (index < FirstDayMonth) {
                elements.push(
                  <div key={index} className="flex items-center justify-center w-[11%] h-7 rounded-full bg-white m-1 opacity-50 lg:w-[9%] lg:h-14">
                    <h1 className="text-lime-700 text-lg font-extrabold">x</h1>
                  </div>
                );
              } else {
                if (dayNumber === 0) {
                  dayNumber = 1;
                } else {
                  dayNumber++;
                  if (dayNumber > monthDays) {
                    dayNumber = dayNumber - monthDays;
                    passed31 = true; // Indica que passamos pelo dia 31
                  }
                }

                // Se passamos pelo dia 31 e subsequentes, definimos como 'x'
                if (passed31) {
                  elements.push(
                    <div key={index} className="flex items-center justify-center w-[11%] h-9 rounded-full bg-white m-1 opacity-50 lg:w-[9%] lg:h-14">
                      <h1 className="text-lime-700 text-lg font-extrabold">x</h1>
                    </div>
                  );
                } else {
                  if ((currentDate.getDay() === 1) || (currentDate.getDay() === 2)) {
                    elements.push(
                      <button onClick={() => setVisible(!visible)} key={index} className={`flex items-center justify-center w-[11%] h-9 rounded-full ${day === dayNumber ? 'bg-lime-500 animate-pulse' : 'bg-white'} m-1 lg:w-[9%] lg:h-14`}>
                        <h1 className="text-lime-700 text-lg font-extrabold">{dayNumber}</h1>
                      </button>
                    );
                  } else {
                    elements.push(
                      <div key={index} className={`flex items-center justify-center w-[11%] h-9 rounded-full ${day === dayNumber ? 'bg-lime-500' : 'bg-white'} m-1 lg:w-[9%] lg:h-14`}>
                        <h1 className="text-lime-700 text-lg font-extrabold">{dayNumber}</h1>
                      </div>
                    );
                  }
                }
              }
            }

            return elements;
          })()}
        </div>
        <div className={visible ? 'flex items-center justify-center' : 'hidden'}>
          <ModalMatch toggleModal={toggleModal} />
        </div>
      </div>
    </div>
  )
}