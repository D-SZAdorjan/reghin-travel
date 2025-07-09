
export default function ContentAdditionalInfo({className = "", children}: {className?: string; children: React.ReactNode}) {
    return (
    <section className={`p-0 w-fit ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-fit p-0">
            {children}
        </div>
    </section>
  )
}