import Image from "next/image";

export default function ContentLabeledImage({
  src,
  width,
  height,
  label,
  className
}: {
  src: string;
  width: number;
  height: number;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex-[0_0_auto] ${className}`}>
      {/* Styled Image Component with Image Title Start */}
      <Image
        className="rounded-lg"
        src={src}
        width={width}
        height={height}
        alt="Image"
      />
      <div className="mt-1.5 text-sm italic">
        {label}
      </div>
      {/* Styled Image Component with Image Title End */}
    </div>
  );
}
