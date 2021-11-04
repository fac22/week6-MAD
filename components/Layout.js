import Link from 'next/link';
import Image from 'next/image';

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
      <footer>
        <address>
          <p>MAD_GAMES</p>
          <p>Space4</p>
          <p>2nd Floor 113-115 Fonthill Road</p>
          <p>Finsbury Park</p>
          <p>London</p>
          <p>N4 3HH</p>
        </address>
        <p>
          <a href="https://github.com/fac22/week6-MAD">
            <Image
              src="/GitHub.png"
              width="32"
              height="32"
              alt="GitHub logo of a silhouetted cat with an octopus tentacle, click to go to GitHub repo for this website."
            />
          </a>
        </p>
        <p>© 2021 MAD_GAMES. All rights reserved.</p>
        <p>
          MAD GAMES LTD. is a company registered in England and Wales (No.
          12345678).
        </p>
      </footer>
    </>
  );
}