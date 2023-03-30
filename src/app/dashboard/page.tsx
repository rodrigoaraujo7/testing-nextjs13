import Link from 'next/link'

// I cant define a new route, with "const =>"
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard Content</h1>
      <Link href="/">Return to home</Link>
    </div>
  )
}
