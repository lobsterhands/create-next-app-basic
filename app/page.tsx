import MyFooter from '@/app/components/footer';
import MyHeader from '@/app/components/header';

export default function Home() {
  return (
    <>
    <MyHeader />
    <main className='p-4'>
      <h1>Page.tsx Title</h1>
      <h3>This heading level 3 style comes from extending Tailwind&apos;s base layer in <code>globals.css</code>.</h3>
      <p className='tip'>This tip style comes from extending Tailwind&apos;s components layer (<code>globals.css</code>).</p>
    </main>
    <MyFooter />
    </>
  );
}
