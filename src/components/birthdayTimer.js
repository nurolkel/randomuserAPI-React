const BirthdayTimer = ({ date }) => {
    return (
        <div className="flex items-center justify-center flex-col w-full my-5 py-3">
                <div className="flex items-center justify-center flex-col w-11/12 bg-purple-500 rounded py-5">
                    <p className="py-5 px-1 uppercase text-white text-2xl ">time until my birthday:</p>
                    <div className="px-1 flex flex-col md:flex-row items-center justify-evenly gap-5">
                        <div className="grid items-center justify-items-center uppercase text-white">
                            <span className="text-xl">Month</span>
                            <p>{date.months}</p>  
                        </div>
                        <div className="grid items-center justify-items-center uppercase text-white">
                            <span className="text-xl">Days</span>
                            <p>{date.days}</p>
                        </div>
                        <div className="grid items-center justify-items-center uppercase text-white">
                            <span className="text-xl">Hours</span>
                            <p>{date.hours}</p>
                        </div>
                        <div className="grid items-center justify-items-center uppercase text-white">
                            <span className="text-xl">Minutes</span>
                            <p>{date.minutes}</p>
                        </div>
                        <div className="grid items-center justify-items-center uppercase text-white">
                            <span className="text-xl">Seconds</span>
                            <p>{date.seconds}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BirthdayTimer;