import { Button } from '@/components/ui/button'

interface CTAProps {
  title: string
  description?: string
  buttonLabel: string
  onClick?: () => void
  href?: string
}

export function CTA({ title, description, buttonLabel, onClick, href }: CTAProps) {
  return (
    <div className="card-glass rounded-lg p-10 text-center flex flex-col items-center gap-4">
      <h3 className="text-h2 text-foreground">{title}</h3>
      {description && <p className="text-muted-foreground max-w-md">{description}</p>}
      {href ? (
        <a href={href}>
          <Button size="lg">{buttonLabel}</Button>
        </a>
      ) : (
        <Button size="lg" onClick={onClick}>
          {buttonLabel}
        </Button>
      )}
    </div>
  )
}