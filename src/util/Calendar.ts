import dayjs from "dayjs";

export const generateDate = (month=dayjs().month(), year = dayjs().year()) => {
    const firstDateofMonth =  dayjs().year(year).month(month).startOf("month")
    const lastDateofMonth = dayjs().year(year).month(month).endOf("month")

    const arrayOfDate  = []



    //create prefix date
// create prefix date
for (let i = 0; i < firstDateofMonth.day(); i++) {
    const date = firstDateofMonth.day(i);

    arrayOfDate.push({
        currentMonth: false,
        date,
    });
}
    //Generate Current Date
    for (let i = firstDateofMonth.date(); i <= lastDateofMonth.date(); i++) {
		arrayOfDate.push({
			currentMonth: true,
			date: firstDateofMonth.date(i),
			today:
            firstDateofMonth.date(i).toDate().toDateString() ===
				dayjs().toDate().toDateString(),
		});
	}

	const remaining = 42 - arrayOfDate.length;

    for (
		let i = lastDateofMonth.date() + 1;
		i <= lastDateofMonth.date() + remaining;
		i++
	) {
		arrayOfDate.push({
			currentMonth: false,
			date: lastDateofMonth.date(i),
		});
	}



    return arrayOfDate
}


export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];