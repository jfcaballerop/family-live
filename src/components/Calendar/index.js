import React from 'react'
import './calendar.scss'
import CalendarMonth from './CalendarMonth';
import CalendarWeeksDays from './CalendarWeekDays';
import CalendarWeekHeader from './CalendarWeekHeader';

export default function Calendar() {

    return (
        <div>
            <ol className="calendar-month">
                <CalendarMonth />
                <CalendarWeekHeader />
                <CalendarWeeksDays />
            </ol>
        </div>
    )
}
