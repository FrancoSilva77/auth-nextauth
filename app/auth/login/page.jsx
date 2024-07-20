'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const router = useRouter()
  const [error, setError] = useState('')

  const onSubmit = handleSubmit(async data => {
    console.log(data);
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })

    console.log(res);

    if (res.error) {
      setError(res.error)
    } else {
      router.push('/dashboard')
    }
  })

  return <div className="h-[calc(100vh-7rem)] flex justify-center items-center">


    <form onSubmit={onSubmit} className="w-1/4">
      {error && (
        <span className="bg-red-500 text-lg text-white p-2 rounded">{error}</span>
      )}
      <h1 className="text-slate-200 font-bold text-3xl my-4">Iniciar Sesión</h1>
      <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">Email</label>
      <input
        type="email"
        {...register('email', {
          required: {
            value: true,
            message: 'El email es requerido'
          },
        })}
        placeholder="username"
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
      />
      {errors.email && (
        <span className="text-red-500 text-sm">
          {errors.email.message}
        </span>
      )}

      <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">Contraseña</label>
      <input
        type="password"
        {...register('password', {
          required: {
            value: true,
            message: 'La contraseña es requerida'
          },
        })}
        placeholder="***"
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
      />
      {errors.password && (
        <span className="text-red-500 text-sm">
          {errors.password.message}
        </span>
      )}

      <button
        className="w-full bg-blue-500 text-white p-3 rounded my-4"
      >Login</button>
    </form>
  </div>;
}
