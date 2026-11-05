const products = [
  { category: 'Construction', name: 'Protective helmet', code: 'SAFE-001' },
  { category: 'Workwear', name: 'All-weather coverall', code: 'SAFE-002' },
  { category: 'Fall arrest', name: 'Safety harness', code: 'SAFE-003' },
]

export default function App() {
  return <main><nav><span className="brand">SAFETY / DEMO</span><span>Catalogue · Solutions · Contact</span></nav><section className="hero"><p className="eyebrow">SANITIZED PORTFOLIO SAMPLE</p><h1>Protection for people at work.</h1><p>A visual catalogue concept for teams that need reliable equipment, clear categories, and a direct route to a quote.</p><button type="button">Discover solutions</button></section><section className="section"><div className="section-heading"><p className="eyebrow">PRODUCT DISCOVERY</p><h2>Safety equipment grouped by the job to be done.</h2></div><div className="grid">{products.map((product) => <article className="card" key={product.code}><span>{product.code}</span><div className="shape" /><p>{product.category}</p><h3>{product.name}</h3><a href="#details">View item →</a></article>)}</div></section><section className="quote" id="details"><p className="eyebrow">B2B WORKFLOW</p><h2>Help procurement teams reach the right choice faster.</h2><p>Static sample content only. No customer information or production integrations are included.</p></section><footer>Frontend demonstration · React + Vite · No API or client data</footer></main>
}
