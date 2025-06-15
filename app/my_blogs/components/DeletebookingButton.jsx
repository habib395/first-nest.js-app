"use client"

import { MdDelete } from "react-icons/md";

export default function DeleteBookingButton( { id } ) {
    const handleDelete = async(id) =>{
        const res = await fetch(`http://localhost:3000/api/service/${id}`,{
            method: "DELETE",
        })
        const data = await res.json()
        console.log(data) 
    }
    return (
        <>
        <MdDelete onClick={() => handleDelete(id)}
        className="h-8 w-8 font-bold" />
        </>
    )
}