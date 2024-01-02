import { ParentProps } from "solid-js";

export default function PageAncillary(props: ParentProps) {
  return (
    <>
      <div class="container pt-12 pb-16">{props.children}</div>
    </>
  );
}
