export default function BannerEnvironment() {
  return (
    <>
      {import.meta.env.MODE === "development" && (
        <div class="bg-warning-500 py-1">
          <div class="container">Environment: DEVELOPMENT</div>
        </div>
      )}
    </>
  );
}
