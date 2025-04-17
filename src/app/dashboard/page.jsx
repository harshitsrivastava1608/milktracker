'use client'

import TextHeading from "@/components/textHeading";

import TimerView from "@/components/timerView";
import HistoryButton from "@/portions/historybutton";



export default function Dashboard() {

  return (
    <div className="min-h-screen flex flex-col justify-between p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 px-4">

      <TextHeading text=" Milking Tracker with Music 🎵🐄" />
      <HistoryButton/>
      </div>
      <TimerView/>
     

    </div>
  );
}
