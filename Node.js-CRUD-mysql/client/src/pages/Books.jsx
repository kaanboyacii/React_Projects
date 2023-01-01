import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        const fetchAllBooks = async () =>{
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllBooks();
    },[])
  return (
      <div>
        <h1>Kaan Book Shop</h1>
        <div className="books">
            {books.map((books)=>(
                <div className="book" key={books.id}>
                    {books.cover && <img src={books.cover} alt="" />}
                    <h2>{books.title}</h2>
                    <p>{books.desc}</p>
                    <span>{books.price}</span>
                    <button className='delete'>Delete</button>
                    <button className='update'>Update</button>
                </div>
            ))}
        </div>
        <button><Link to="/add" > Add new book</Link></button>
    </div>
  )
}

export default Books