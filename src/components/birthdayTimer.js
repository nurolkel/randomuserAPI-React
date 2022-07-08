const BirthdayTimer = ({ date }) => {
    return (
        <div className="flex items-center justify-center flex-col w-full">
                <div className="flex items-center justify-center flex-col w-11/12 bg-indigo-500 rounded p-5">
                    <p className="p-5 uppercase text-white">time until my birthday:</p>
                    <div className="px-1 flex flex-row justify-center items-center gap-3">
                        <div className="grid items-center justify-items-center uppercase text-white">
                            <span>Month</span>
                            <p>{date.months}</p>  
                        </div>
                        <div className="grid items-center justify-items-center uppercase text-white">
                            <span>Days</span>
                            <p>{date.days}</p>
                        </div>
                        <div className="grid items-center justify-items-center uppercase text-white">
                            <span>Hours</span>
                            <p>{date.hours}</p>
                        </div>
                        <div className="grid items-center justify-items-center uppercase text-white">
                            <span>Minutes</span>
                            <p>{date.minutes}</p>
                        </div>
                        <div className="grid items-center justify-items-center uppercase text-white">
                            <span>Seconds</span>
                            <p>{date.seconds}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BirthdayTimer;