import Link from 'next/link';

export default function Layout({ children, home }) {
  return (
    <>
      <header>
        <Link href="/">
          <a>
            <h1>MAD_GAMES</h1>
            <p>Online Store</p>
          </a>
        </Link>
        <section>
          <Link href="/">
            <a>
              <p>🛒</p>
              <p>£0.00</p>
            </a>
          </Link>
        </section>
      </header>
      <main>{children}</main>
      {!home && (
        <Link href="/">
          <a>Return Home</a>
        </Link>
      )}
    </>
  );
}
