import Image from "next/image";
import catImg from "./../public/images/2.jpg";

const images = ["1", "2", "3", "4", "5"];

function PetsPage() {
  return (
    <div>
      {/* use blurDataURL prop for dynamic images */}
      <Image
        src={catImg}
        placeholder="blur"
        alt="pet"
        width={500}
        height={500}
      />
      {images.map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/images/${path}.jpg`}
              alt="pet"
              width={500}
              height={500}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PetsPage;
