export default function ContentTextBlock({children}:{children: React.ReactNode}) {
  return (
    <div className="text-sm leading-7 my-5">
      {children}
    </div>
  );
}