import { JSX } from "solid-js/jsx-runtime";
import Footer from "~/components/_globals/footer/Footer";

interface Props {
  children: JSX.Element;
}

export default function Layout(props: Props) {
  return (
    <>
      {props.children}

      <Footer />
    </>
  );
}
