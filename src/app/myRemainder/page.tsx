'use client'
import CustomCard, { CardProps } from "@/components/common/myRemainder/fetchdata";
import { useEffect, useState } from "react";

export default function MyRemainders() {
    const [events, setEvents] = useState<any[]>([]); // Initialize as empty array

    useEffect(() => {
        const fetchClubData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/eventsdata");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const jsonData = await response.json();
                console.log(jsonData); // Log the response as JSON
                setEvents(jsonData); // Set the fetched events
            } catch (error:any) {
                console.log(error.message);
            }
        };

        fetchClubData();
    }, []);

    return (
        <div className="bg-[#B3DCE9] h-wrap w-48 pb-3 rounded-lg shadow-lg">
            <div className="bg-[#60b2cb] p-2 px-3  flex justify-between items-center rounded-lg gap-2">
                <p className="text-[#0F1035] font-semibold">My Reminders</p>
                <button className="font-semibold text-2xl rounded-full hover:bg-[#438498] px-2">+</button>
            </div>

            {/* Render events */}
            <div className="grid gap-2 p-1 text-sm text-[#dacece]">
                {events?.map((event) => (
                    <div className="p-1 bg-[#365486] px-4 rounded-md" key={event.eventid}>
                        <h4 className="text-white">{event.name}</h4>
                        <small className="text-xs">{event.date_time}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}
