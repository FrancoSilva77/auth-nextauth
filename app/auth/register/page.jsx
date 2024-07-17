"use client"
import { useForm } from "react-hook-form"

export default function RegisterPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit(data => {
    console.log(data);
  })

  console.log(errors);


  return <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
    <form onSubmit={onSubmit} className="w-1/4">
      <h1 className="text-slate-200 font-bold text-3xl my-4">Registrar</h1>
      <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">Username</label>
      <input
        type="text"
        {...register('username', {
          required: {
            value: true,
            message: 'El username es requerido'
          },
        })}
        placeholder="Tu usuario"
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
      />
      {errors.username && (
        <span className="text-red-500 text-sm">
          {errors.username.message}
        </span>
      )}
      <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">Email</label>
      <input type="email"
        {...register('email', {
          required: {
            value: true,
            message: 'El correo es requerido'
          }
        })}
        placeholder="Tu correo"
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
      />
      {errors.email && (
        <span className="text-red-500 text-sm">
          {errors.email.message}
        </span>
      )}

      <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">Password</label>
      <input type="password"
        {...register('password', {
          required: {
            value: true,
            message: 'La contraseña es requerida'
          }
        })}
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        placeholder="Tu contraseña"
      />
      {errors.password && (
        <span className="text-red-500 text-sm">
          {errors.password.message}
        </span>
      )}
      <label htmlFor="confirmPassword" className="text-slate-500 mb-2 block text-sm">Confirmar Password</label>
      <input type="password"
        {...register('confirmPassword', {
          required: {
            value: true,
            message: 'Confirma tu contraseña'
          }
        })}
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        placeholder="Repite tu contraseña"
      />
      {errors.confirmPassword && (
        <span className="text-red-500 text-sm">
          {errors.confirmPassword.message}
        </span>
      )}

      <button
        className="w-full bg-blue-500 text-white p-3 rounded my-4"
      >Registrar</button>
    </form>
  </div>
}
