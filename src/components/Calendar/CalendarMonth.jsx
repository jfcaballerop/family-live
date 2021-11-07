import React from 'react'

export default function CalendarMonth() {
    const date = new Date();  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    return (
        <div className="calendar-title-month">{month.toUpperCase()}</div>
    )
}