'use client'
import TextButton from "@/components/textButton";
import { useRouter } from "next/navigation";

const HistoryButton = () =>{
    const router = useRouter()
    const moveToHistory =()=>{
        console.log('===+')
        
        router.push('/history')
    }
   return <TextButton name="Milking History" colour="bg-blue-600" onClick={moveToHistory}/>
}
export default HistoryButton