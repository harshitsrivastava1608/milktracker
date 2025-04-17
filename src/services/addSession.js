import { SAVE_SESSION_URI } from "@/types/apiUrls";

export const handleSubmit = async (props) => {
    try {
        console.log('data',props)
      const response = await fetch(SAVE_SESSION_URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          start_time: props.start_time,
          end_time: props.end_time, // +15 mins
          duration: props.duration,
          milk_quantity: props.milk_quantity,
        }),
      });

      const data = await response.json();
      console.log('✅ Response:', data);
    } catch (err) {
      console.error('❌ Error:', err);
    }
  };