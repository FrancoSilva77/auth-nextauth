'use client'
import { signOut } from 'next-auth/react';

export default function DashboardPage() {
  return <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
    <div className="">

      <h1 className="text-white text-5xl">Dashboard</h1>

      <button className="bg-white text-black px-4 py-2 rounded-md mt4" onClick={() => signOut()}>Cerrar Sesión</button>
    </div>
    DashboardPage
  </section>;
}
