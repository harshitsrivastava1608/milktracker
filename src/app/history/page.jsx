'use client'
import { getAllSessions } from "@/services/getSessions";
import { useEffect, useState } from "react";



export default function History() {

  const [sessionData, setSessionData] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      let res = await getAllSessions()
      console.log('res', res)
      setSessionData(res)
      setLoading(false)
    }
    getData()
  }, [])


  return (
    <>List Of History
      <div className="overflow-x-auto">
        {loading ? <h4>Loading.......</h4> :
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-2 border-b">Date</th>
                <th className="text-left p-2 border-b">Start Time</th>
                <th className="text-left p-2 border-b">End Time</th>
                <th className="text-left p-2 border-b">Duration</th>
                <th className="text-left p-2 border-b">Milk Collected</th>
              </tr>
            </thead>


            <tbody>


              {sessionData.map((sessionData, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border-b">{sessionData.createdAt}</td>
                  <td className="p-2 border-b">{sessionData.start_time}</td>
                  <td className="p-2 border-b">{sessionData?.end_time}</td>
                  <td className="p-2 border-b">{sessionData?.duration}</td>
                  <td className="p-2 border-b">{sessionData?.milk_quantity}</td>
                </tr>
              ))}
            </tbody>


          </table>
        }
      </div>
    </>
  );
}
