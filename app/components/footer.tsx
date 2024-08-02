import Link from 'next/link';

export default function MyFooter() {
  return (
    <footer className='border-t-2 p-2 mt-auto'>
        <Link className='p-2 hover:underline' href="/">Home</Link>
        <p className='text-center'>&copy; 2024</p>
    </footer>
  )
}
