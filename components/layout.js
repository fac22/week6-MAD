import Link from 'next/link';

export default function Layout({ children, home }) {
  return (
    <>
      <header>
        <h1>MAD GAMES Online Store</h1>
        <nav>
          <ol>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>Games</li>
            <li>Genre</li>
            <li>Category</li>
          </ol>
        </nav>
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
