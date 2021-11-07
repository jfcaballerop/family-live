import React from 'react'

export default function CalendarFirstWeek({ configDays: firstDay }) {
    let contDays = 0
    var components = []
    for (let i = 1; i <= 7; i++) {

        if (firstDay <= i) {
            components.push(<li key={i} className="day "><span className="day__number">{++contDays}</span></li>)
        } else
            components.push(<li key={i} className="day day--empty"></li>)
    }

    return (
        <li className="week">
            <ol className="days">
                {components}
            </ol>
        </li>

    )


}
