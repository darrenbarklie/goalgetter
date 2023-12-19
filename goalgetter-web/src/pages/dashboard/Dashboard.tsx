export default function Home() {
  // const changeTheme = (theme: string) => {
  //   document.querySelector("html")?.setAttribute("data-theme", theme);
  // };

  return (
    <>
      <div class="h-screen grid place-items-center bg-primary-100">
        <div>
          <h1 class="text-display-1 text-primary-800">TEST TEXT</h1>
          <h1 class="text-display-1 text-primary-300">TEST TEXT</h1>

          {/* <button
            class="border py-2 px-8 bg-buttons text-typography m-2"
            onClick={() => changeTheme("light")}
          >
            Theme Light
          </button>
          <button
            class="py-2 px-8 bg-buttons text-typography m-2"
            onClick={() => changeTheme("dark")}
          >
            Theme Dark
          </button> */}
        </div>
      </div>
    </>
  );
}
