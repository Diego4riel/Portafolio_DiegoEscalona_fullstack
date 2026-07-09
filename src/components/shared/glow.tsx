interface GlowProps {
  position?: 'top' | 'center' | 'bottom'
  size?: 'sm' | 'md' | 'lg'
}

const positionMap = {
  top: '-top-40',
  center: 'top-1/2 -translate-y-1/2',
  bottom: '-bottom-40',
}

const sizeMap = {
  sm: 'w-[300px] h-[300px]',
  md: 'w-[500px] h-[500px]',
  lg: 'w-[700px] h-[700px]',
}

export function Glow({ position = 'top', size = 'md' }: GlowProps) {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 ${positionMap[position]} ${sizeMap[size]} rounded-full pointer-events-none`}
      style={{
        background: 'radial-gradient(circle, oklch(1 0 0 / 8%) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }}
    />
  )
}