import { createResource } from "solid-js";
import BannerEnvironment from "./BannerEnvironment";

export default function Footer() {
  const [version] = createResource(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_GOALGETTER_API_URL}/version`
      );
      return await response.json();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  });

  return (
    <>
      <BannerEnvironment />

      <div class="container flex justify-between pt-1 pb-2">
        <small class="copyright">
          © 2023{" "}
          <a
            href="https://craftapplied.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crafted Solutions Limited
          </a>
        </small>

        <div class="flex flex-wrap gap-2">
          <small class="mono">{version()?.version}</small>
          <small>
            <a href="/changelog" class="underline">
              CHANGELOG
            </a>
          </small>
        </div>
      </div>
    </>
  );
}
