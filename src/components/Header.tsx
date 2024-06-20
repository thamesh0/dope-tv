import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header>
        <Link href={"/"}>
          Logo<span className="sr-only">Back to Homepage</span>
        </Link>
      </header>
      <StickyHeader />
    </>
  );
};

const StickyHeader = () => {
  return <div className="bg-black px-6 text-white">Apple TV +</div>;
};
