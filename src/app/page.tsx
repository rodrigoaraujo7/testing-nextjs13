import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-6 max-w-sm mt-4 bg-secondary-background rounded-xl shadow-xl flex items-center space-x-4">
      <h1 className="text-xl font-medium text-primary-text">Home</h1>
      <Link
        href="/dashboard"
        className="text-secondary-blue underline transition hover:text-primary-blue"
      >
        Go to Dashboard
      </Link>
    </div>
  )
}
