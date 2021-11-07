import React from 'react'

export default function CalendarMiddleWeek({ firstWeekDay, lastWeekDay }) {
    var components = []
    for (let i = firstWeekDay; i <= lastWeekDay; i++) {
        components.push(<li key={i} className="day "><span className="day__number">{i}</span></li>)
    }
    return (
        <li className="week">
            <ol className="days">
                {components}
            </ol>
        </li>

    )
}
