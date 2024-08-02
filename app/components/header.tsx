import Link from 'next/link';

export default function MyHeader() {
  return (
    <header className='border-b-2 p-4 mb-4'>
      <Link className='p-2 hover:underline' href="/">Home</Link>
    </header>
  )
}
