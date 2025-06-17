import { useState, useEffect } from "react"

function DegitalClock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => {
            clearInterval(intervalID);
        }
    }, [])
    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridium = hours >= 12 ? "PM" : "AM";
        hours = hours > 12 ? hours - 12 : hours;
        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${meridium}`;
    }
    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }
    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}
export default DegitalClock