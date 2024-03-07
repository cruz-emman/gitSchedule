import dayjs from 'dayjs'
import { create } from 'zustand'
import { months } from './Calendar';
const currentDate = dayjs()
const formattedDate = currentDate.toDate().toDateString()

interface DatePickerState {
    dateOfRequestedPicker: string;
    dateOfEventPicker: string;
    setDateOfEventPicker: (newDate: string) => void; // Typing for setDateOfEventPicker function

}

const useDatePicker = create<DatePickerState>((set) => ({
    dateOfRequestedPicker: formattedDate,
    dateOfEventPicker: '',
    setDateOfEventPicker: (newDate: string) =>
    set((state) => ({ ...state, dateOfEventPicker: newDate })),
}))

export default useDatePicker