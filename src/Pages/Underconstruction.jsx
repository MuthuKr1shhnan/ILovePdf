export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img src="/construction.svg" alt="Under Construction" className="md:w-1/3 mb-8" />
      <h1 className="md:text-4xl text-2xl font-bold mb-4">🚧 Page Under Construction</h1>
      <p className="md:text-lg text-[16px] text-gray-600">We’re working hard to bring this page to life. Check back soon!</p>
    </div>
  );
}