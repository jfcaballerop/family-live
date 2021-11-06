import React from 'react'

export default function CalendarWeekHeader({ header }) {
    const WEEK_HEADER = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

    return (
        <li className="week">
            <ol className="days">
                {
                    WEEK_HEADER.map(d => <div key={d} className="week__header">{d}</div>)

                }
            </ol>
        </li >
    )
}
