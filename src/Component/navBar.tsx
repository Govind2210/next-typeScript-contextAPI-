"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const NavBar = () => {
const searchParams = useSearchParams();
const InitialltodosFilter = searchParams.get('todos');
const [newSearchParam , setNewSearchParam] = useState(InitialltodosFilter)

useEffect(() => {
  console.log('newSearchParam==>', newSearchParam);
}, [newSearchParam]);

useEffect(()=>{
  setNewSearchParam(searchParams.get('todos'))
},[searchParams])

  return (
    <nav className="w-full flex">
        <Link className={InitialltodosFilter === null ? "active":""} href="/">All</Link>
        <Link className={InitialltodosFilter === "active" ? "active":""} href="/?todos=active">Active</Link>
        <Link className={InitialltodosFilter === "completed" ? "active":""} href="?todos=completed">Completed</Link>
    </nav>
  )
  }

export default NavBar