import Link from 'next/link'

export const metadata = {
  title: 'Login',
}

export default function SignIn() {
  return (
    <div>
      <h1>SignIn Content</h1>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  )
}
