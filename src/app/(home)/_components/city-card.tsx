import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import VectorTopLeftAnimation from "@/components/vector-top-left-animation";
import { useGetPhoto } from "@/features/photos/api/use-get-photo";

interface Props {
  title: string;
  coverId: string | null;
}

const CityCard = ({ title, coverId }: Props) => {
  const { data } = useGetPhoto(coverId!);

  if (!data) return null;

  return (
    <div className="w-full relative group cursor-pointer">
      <AspectRatio ratio={0.75 / 1} className="overflow-hidden rounded-lg">
        <Image
          src={data.url}
          alt="Image"
          fill
          className="
            object-cover
            transition-[filter] duration-300 ease-out
            group-hover:blur-sm
          "
        />
      </AspectRatio>

      <div className="absolute top-0 left-0">
        <VectorTopLeftAnimation title={title} />
      </div>
    </div>
  );
};

export default CityCard;
