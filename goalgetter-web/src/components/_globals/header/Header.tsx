import { A } from "@solidjs/router";

export default function Header() {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <A href="/">Dashboard</A>
        <A href="/goals">Goals</A>
        <A href="/about">About</A>
      </nav>
    </>
  );
}
