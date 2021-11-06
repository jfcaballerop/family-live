import React from 'react'
import './calendar.scss'
import CalendarFirstWeek from './CalendarFirstWeek';
import CalendarWeekHeader from './CalendarWeekHeader';

export default function Calendar() {
    let contDays = 0

    function Month() {
        const date = new Date();  // 2009-11-10
        const month = date.toLocaleString('default', { month: 'long' });
        return (
            <div className="calendar-title-month">{month.toUpperCase()}</div>
        )
    }

    function MiddleWeek({ contDays }) {
        var components = []
        for (let i = 1; i <= 7; i++) {
            components.push(<li className="day "><span className="day__number">{++contDays}</span></li>)
        }
        return (
            <li className="week">
                <ol className="days">
                    {components}
                </ol>
            </li>

        )
    }

    const updateContDays = (v) => {
        console.log('updateContDays', v);
        contDays = v
    }

    function WeeksDays() {

        // month_number is in the range 1..12
        var date = new Date()
        var year = date.getFullYear()
        var month_number = date.getMonth() + 1

        var firstOfMonth = new Date(year, month_number - 1, 1);
        var lastOfMonth = new Date(year, month_number, 0);

        // TODO: usar el contexto
        var used = firstOfMonth.getDay() + 6 + lastOfMonth.getDate();
        const weeks = [...Array(Math.ceil(used / 7)).keys()];
        let element
        return (
            weeks.map((w, index) => {
                if (w === 0) {
                    element = <CalendarFirstWeek contDays={contDays} updateContDays={updateContDays} />
                } else {
                    console.log('WeeksDays', contDays);
                    element = <MiddleWeek contDays={contDays} />

                }
                return element
            }
            )
        )
    }

    return (
        <div>
            <ol className="calendar-month">
                <Month></Month>

                <CalendarWeekHeader />

                <WeeksDays></WeeksDays>
            </ol>
        </div>
    )
}
