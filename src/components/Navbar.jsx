import Link from "next/link";
import { getServerSession } from 'next-auth/next'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Navbar() {

  const session = await getServerSession(authOptions)

  return <nav className="flex justify-between bg-white">
    <h1>Next Auth</h1>

    <ul>
      {!session?.user ? (
        <>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/auth/login'>Login</Link>
          </li>
          <li>
            <Link href='/auth/register'>Register</Link>
          </li>
        </>
      ) :
        (
          <>
            <li>
              <Link href='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link href='/api/auth/signout'>Logout</Link>
            </li>

          </>
        )
      }


    </ul>
  </nav>;
}
