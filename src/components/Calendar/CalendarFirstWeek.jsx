import React from 'react'

export default function CalendarFirstWeek({ contDays, updateContDays }) {

    var date = new Date()
    var year = date.getFullYear()
    var month_number = date.getMonth() + 1
    var firstOfMonth = new Date(year, month_number - 1, 1);
    console.log('firstOfMonth', firstOfMonth.getDay());
    var components = []
    for (let i = 1; i <= 7; i++) {
        console.log(contDays);
        if (firstOfMonth.getDay() <= i) {
            components.push(<li key={i} className="day "><span className="day__number">{++contDays}</span></li>)
        } else
            components.push(<li key={i} className="day day--empty"></li>)
    }

    updateContDays(contDays)

    return (
        <li className="week">
            <ol className="days">
                {components}
            </ol>
        </li>

    )


}
