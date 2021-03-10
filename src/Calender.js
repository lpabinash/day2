import React from 'react'
import { Calendar, momentLocalizer,Views } from 'react-big-calendar'
// import events from './Events'
// import * as dates from './Dates'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

// let Basic = ({ localizer }) => (
//   <BigCalendar
//     events={events}
//     Views={allViews}
//     step={60}
//     showMultiDayTimes
//     max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
//     defaultDate={new Date(2015, 3, 1)}
//     components={{
//       timeSlotWrapper: ColoredDateCellWrapper,
//     }}
//     localizer={localizer}
//   />
// )

const Basic = props => (
  
  <div>
    <Calendar
      localizer={localizer}
      events={props.data}
      // max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
      defaultDate={new Date}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      components={{
              timeSlotWrapper: ColoredDateCellWrapper,
            }}
    />
    {console.log(props.data)}
  </div>
)

export default Basic