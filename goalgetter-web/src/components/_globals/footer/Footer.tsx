import { createResource } from "solid-js";

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
      <div class="container">

        {import.meta.env.MODE === "development" && <div>DEV DEV DEV</div>}

        <div class="copyright">
          © 2023{" "}
          <a
            href="https://craftapplied.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crafted Solutions Limited
          </a>
        </div>

        <div>
          <small>{version()?.version}</small>
        </div>
      </div>
    </>
  );
}
