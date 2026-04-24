function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Anjnesh Singh Tomar</p>
        <p>Built as a data science adventure interface.</p>
      </div>
    </footer>
  )
}

export default Footer
