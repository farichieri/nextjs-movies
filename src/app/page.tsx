'use client';
import { Button } from '@/components/ui/button';
import useStore from '@/store/bear';

export default function Home() {
  const bears = useStore((state) => state.bears);
  const increase = useStore((state) => state.increase);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>{bears} around here...</h1>
      <Button onClick={() => increase(1)}>Click me</Button>
    </main>
  );
}
