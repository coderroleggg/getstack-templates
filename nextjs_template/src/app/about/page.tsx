import Link from 'next/link'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-8">About This Template</h1>
        
        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            This is a simple Next.js template built with modern web development practices.
            It includes TypeScript, Tailwind CSS, and follows the App Router pattern.
          </p>
          
          <p>
            The template is designed to be a starting point for your Next.js projects,
            providing a clean structure and essential configurations.
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Features included:</h2>
            <ul className="text-left space-y-2">
              <li>✅ Next.js 15 with App Router</li>
              <li>✅ TypeScript configuration</li>
              <li>✅ Tailwind CSS for styling</li>
              <li>✅ ESLint for code quality</li>
              <li>✅ Dark mode support</li>
              <li>✅ Responsive design</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
} 