import Counter from "@/components/Counter/Counter";
import Link from "next/link";


const HomePage = () => {
  // throw new Error();

  return (
    <div>
      <h1>This is home</h1>
      <Counter></Counter>
      <Link href='/about'>
        <button className="btn btn-accent">About</button>
      </Link>
      <Link href='/news'>
        <button className="btn btn-link">News</button>
      </Link>
    </div>
  );
};

export default HomePage;