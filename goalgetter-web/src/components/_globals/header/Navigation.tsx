import { ParentProps } from "solid-js";

export default function Navigation(props: ParentProps) {
  return (
    <div
      class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {props.children}
      </ul>
    </div>
  );
}
