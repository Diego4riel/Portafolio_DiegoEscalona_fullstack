export function Navbar() {
  return (
    <nav className="nav-pill flex items-center gap-2 px-3 py-2 mx-auto w-fit fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <a className="px-5 py-2 rounded-full bg-foreground text-background font-medium">Sobre mi</a>
      <a className="px-5 py-2 rounded-full text-foreground/80 hover:text-foreground">Proyectos</a>
      <a className="px-5 py-2 rounded-full text-foreground/80 hover:text-foreground">Habilidades</a>
      <a className="px-5 py-2 rounded-full text-foreground/80 hover:text-foreground">Contacto</a>
    </nav>
  )
}