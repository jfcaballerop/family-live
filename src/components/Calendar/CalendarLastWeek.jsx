import React from 'react'

export default function CalendarLastWeek({ lastMonthDay, contMonthDay }) {
    var components = []
    // console.log(lastMonthDay, contMonthDay);
    for (let i = 1; i <= 7; i++) {

        if (contMonthDay >= i) {
            components.push(<li key={lastMonthDay - (contMonthDay - i)} className="day "><span className="day__number">{lastMonthDay - (contMonthDay - i)}</span></li>)
        } else {
            components.push(<li key={`empty${i}`} className="day day--empty"></li>)
        }
    }

    return (
        <li className="week">
            <ol className="days">
                {components}
            </ol>
        </li>

    )


}
