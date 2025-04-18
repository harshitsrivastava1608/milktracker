
import { useEffect, useState, useRef } from "react";
import TextButton from "@/components/textButton";
import { handleSubmit } from "@/services/addSession";

export default function TimerView() {
    const [timerOn, setTimerOn] = useState();
    const [time, setTime] = useState('0');
    const [initialTime, setInitialTime] = useState(0);
    const [startTime, setStartTime] = useState(-1)
    const [endTime, setEndTime] = useState(-1)
    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current?.play();
    };

    const pauseAudio = () => {
        audioRef.current?.pause();
    };

    const handleInput = () => {
        const value = prompt("Please enter the milk amount in Litres:");
        if (value !== null && value.trim() !== "") {
            handleSubmit({
                start_time: startTime,
                end_time: endTime == -1 ? new Date().toISOString() : endTime,
                duration: Math.floor(time / 1000),
                milk_quantity: value
            })
            alert(`Sumitted Milk Session Data Successfully!, ${value}Litres!`);
        } else {
            alert("No name entered.");
        }
    };

    const startTimer = () => {
        playAudio()
        if (startTime == -1)
            setStartTime(new Date().toISOString())
        setInitialTime(new Date().getTime() - time); // Resume from where it was paused
        setTimerOn(true);
        console.log("startTimer", timerOn, time);
    };

    const pauseTimer = () => {
        timerOn ? pauseAudio() : playAudio()
        setInitialTime(Date.now() - time);
        setTimerOn(!timerOn);
        console.log("pauseTimer", timerOn, time);
    };

    const stopTimer = () => {
        pauseAudio()
        setEndTime(new Date().toISOString())
        setTimerOn(false);
        setTime(0);
        setInitialTime(0);
        console.log("stopTimer", timerOn);
        handleInput()

    };

    useEffect(() => {
        let interval;
        if (timerOn) {
            interval = setInterval(() => {
                setTime(Date.now() - initialTime);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval); // clean up on unmount
    }, [timerOn, initialTime]);

    return (
        <>
            <div className="flex-1 flex items-center justify-center">
                <h1 className="text-6xl font-bold">Timer: {Math.floor(time / 1000)}s</h1>
            </div>
            <audio ref={audioRef} src="/audio/Moon-Waltz.mp3" preload="auto" />
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mb-4">
                {timerOn ?? <TextButton name="Start Timer" colour="bg-blue-600" onClick={startTimer} disabled={timerOn} />}
                <TextButton name="Pause/Resume Timer" colour="bg-green-600" onClick={pauseTimer} />
                <TextButton name="Stop Timer" colour="bg-purple-600" onClick={stopTimer} />


            </div>
        </>
    );
}
