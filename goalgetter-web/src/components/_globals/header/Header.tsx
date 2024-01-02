import Brand from "./Brand";
import ButtonMobileMenu from "./ButtonMobileMenu";
import Navigation from "./Navigation";
import NavigationLink from "./NavigationLink";

import { Button } from "~/components/ui/button";

export default function Header() {
  return (
    <header>
      <nav class="bg-white py-2.5">
        <div class="container">
          <div class="flex flex-wrap justify-between items-center">
            <Brand />

            <div class="flex items-center lg:order-2">
              <Button variant="default">Capture</Button>

              <ButtonMobileMenu />
            </div>

            <Navigation>
              <NavigationLink href="/goals" text="Goals" />
              <NavigationLink href="/community" text="Community" />
              <NavigationLink href="/about" text="About" />
            </Navigation>
          </div>
        </div>
      </nav>
    </header>
  );
}
