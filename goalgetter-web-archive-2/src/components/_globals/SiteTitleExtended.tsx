import { JSX } from "solid-js/jsx-runtime";
import { Title } from "solid-start";

interface Props {
  children: JSX.Element;
}

export default function SiteTitleExtended(props: Props) {
  return <Title>{props.children} | GoalGetter</Title>;
}
