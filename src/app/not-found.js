import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container">
      <h1 className="title">404</h1>
      <p className="message">Oops! The page you’re looking for doesn’t exist.</p>
      <p className="description">It looks like the page you’re trying to reach is either missing or has been moved.</p>
      <Link href="/">
        <p className="homeLink">Go back to Home</p>
      </Link>
    </div>
  );
}
