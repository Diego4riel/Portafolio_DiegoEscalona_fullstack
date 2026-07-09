interface SectionTitleProps {
  title: string
  kicker?: string
  description?: string
}

export function SectionTitle({ title, kicker, description }: SectionTitleProps) {
  return (
    <div className="mb-10">
      {kicker && (
        <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
          {kicker}
        </p>
      )}
      <h2 className="text-h2 text-foreground">{title}</h2>
      {description && (
        <p className="text-muted-foreground mt-3 max-w-xl">{description}</p>
      )}
    </div>
  )
}