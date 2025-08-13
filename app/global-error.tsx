'use client';
import Button from '@/app/components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GlobalErrorProps } from './type';

export default function GlobalError({ error, reset, resetButtonText = 'Try again' }: GlobalErrorProps) {
  const router = useRouter();

  console.error(error);

  return (
    <html>
      <body className="h-screen w-screen flex flex-col items-center gap-5 justify-center">
        <Image
          src="/images/error-image.webp"
          placeholder="blur"
          blurDataURL="/images/blur-image.webp"
          alt="error"
          width={1000}
          height={1000}
          priority
          className="w-72"
        />
        <h2 className="text-2xl font-semibold">Something went wrong!</h2>
        <div className="flex gap-5 *:text-nowrap">
          <Button onClick={() => reset()}>{resetButtonText}</Button>
          <Button onClick={() => router.push('/')} variant="outline">
            Go to home
          </Button>
        </div>
      </body>
    </html>
  );
}
