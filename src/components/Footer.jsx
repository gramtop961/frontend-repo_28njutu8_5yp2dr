export default function Footer(){
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} SuppAI</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-slate-700">Privacy</a>
          <a href="#" className="hover:text-slate-700">Terms</a>
          <a href="#" className="hover:text-slate-700">Contact</a>
        </div>
      </div>
    </footer>
  )
}
