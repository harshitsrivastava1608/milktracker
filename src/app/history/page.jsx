


export default function History() {
    const person = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
      ];
  
  return (
    <>List Of History
     <div className="overflow-x-auto">
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
          {person.map((person, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border-b">{person.name}</td>
              <td className="p-2 border-b">{person.age}</td>
              <td className="p-2 border-b">{person?.city}</td>
              <td className="p-2 border-b">{person?.city}</td>
              <td className="p-2 border-b">{person?.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
