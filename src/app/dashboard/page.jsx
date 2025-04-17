'use client'

import TextHeading from "@/components/textHeading";

import TimerView from "@/components/timerView";
import HistoryButton from "@/portions/historybutton";
import MusicPlayer from "@/app/dashboard/playMusic";



export default function Dashboard() {

  return (
    <div className="min-h-screen flex flex-col justify-between p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 px-4">

      <TextHeading text="Use Timer" />
      <HistoryButton/>
      </div>
      {/* <MusicPlayer/> */}
      <TimerView/>
     

    </div>
  );
}
