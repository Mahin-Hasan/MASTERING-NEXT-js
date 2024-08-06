import Button from "@/app/components/Button";
import Image from "next/image";
import slider1 from "@/public/images/slide1.png"

const Mission = () => {
  return (
    <main className="mt-4">
      <h3>This is Mission page</h3>
      <p>mission dummy Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt nisi fugit non aliquid, quas hic ipsam at temporibus? Odio.</p>
      <Image placeholder="blur" src={slider1} alt="Slider Image" quality={100}/>
      {/* only making this button as client compo */}
      <Button/>
    </main>
  );
};

export default Mission;
