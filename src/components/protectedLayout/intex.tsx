import { useAuth } from "../../context/AuthProvider/useAuth";

export default function ProtectedLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth()

  if(!auth.email) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-white font-extrabold mt-72 text-7xl">You don't have access!</h1>
      </div>
    )
  }

  return children
}