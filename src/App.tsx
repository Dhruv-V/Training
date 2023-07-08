import React from 'react';
import { Calendar, CalendarWithoutContext, DatePicker, DatePickerWithoutContext } from '@progress/kendo-react-dateinputs';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="inner">
      <DatePicker/>
      <DatePickerWithoutContext/>
      <Calendar/>
      <CalendarWithoutContext/>
      </div>
    </div>
  );
  }

export default App;
