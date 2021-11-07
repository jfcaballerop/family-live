import React from 'react'
import CalendarFirstWeek from './CalendarFirstWeek';
import CalendarLastWeek from './CalendarLastWeek';
import CalendarMiddleWeek from './CalendarMiddleWeek';

export default function CalendarWeeksDays() {

    // month_number is in the range 1..12
    var date = new Date()
    var year = date.getFullYear()
    var month_number = date.getMonth() + 1
    var firstOfMonth = new Date(year, month_number - 1, 1);
    var lastOfMonth = new Date(year, month_number, 0);
    var used = firstOfMonth.getDay() + lastOfMonth.getDate();
    let firstWeekDay = firstOfMonth.getDay()
    let lastMonthDay = lastOfMonth.getDate()
    let contMonthDay = lastOfMonth.getDay()
    const weeks = [...Array(Math.ceil(used / 7)).keys()];
    let element
    return (
        weeks.map((w, index) => {
            if (w === 0) {
                element = <CalendarFirstWeek key={w} configDays={firstWeekDay} />
            } else if (weeks.length - 1 === index) {
                const configDays = { lastMonthDay: lastMonthDay, contMonthDay: contMonthDay }
                element = <CalendarLastWeek key={w} {...configDays} />

            } else {
                const configDays = { firstWeekDay: w * 7 - (firstWeekDay - 2), lastWeekDay: (w * 7 - (firstWeekDay - 2) + 6) }
                element = <CalendarMiddleWeek key={w} {...configDays} />

            }
            return element
        }
        )
    )
}