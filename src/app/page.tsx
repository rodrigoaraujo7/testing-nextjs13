import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-6 max-w-sm mt-4 bg-secondary-light-background dark:bg-secondary-dark-background rounded-xl shadow-xl flex flex-col items-center space-x-4 sm:flex-row">
      <h1 className="text-xl font-medium text-dark-background dark:text-light-background">
        Home
      </h1>
      <Link
        href="/dashboard"
        className="underline transition text-secondary-green dark:text-secondary-blue hover:text-primary-green dark:hover:text-primary-blue"
      >
        Go to Dashboard
      </Link>
    </div>
  )
}
