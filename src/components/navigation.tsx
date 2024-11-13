'use client';
//위 명령어를 사용해도 rendering이 backend에서 먼저 이뤄짐
import Link from 'next/link';

/**
 * Navigation component
 * @returns Navigation component
 * @example
 * ```tsx
 * <Navigation />
 * ```
 * @see Navigation
 * @since 24.04.10
 */
export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 w-full py-5 flex justify-center">
      <div className="justify-start items-start gap-10 flex">
        <Link href="/quiz">Quiz</Link>
        <Link href="/">Home</Link>
        <Link href="/roadmap">Roadmap</Link>
      </div>
  </nav>
  );
}
