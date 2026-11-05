const products = [
  { category: 'Head protection', name: 'Industrial helmet', code: 'PPE-001' },
  { category: 'Hand protection', name: 'Work gloves', code: 'PPE-002' },
  { category: 'Safety footwear', name: 'Protective boots', code: 'PPE-003' },
]

export default function App() {
  return <main><nav><span className="brand">PROTECT / DEMO</span><span>Catalogue · Categories · Contact</span></nav><section className="hero"><p className="eyebrow">SANITIZED PORTFOLIO SAMPLE</p><h1>Equipment built for the workday.</h1><p>Explore a focused PPE catalogue concept for professional teams and industrial environments.</p><button type="button">Browse categories</button></section><section className="section"><div className="section-heading"><p className="eyebrow">PRODUCT DISCOVERY</p><h2>Essential protection, clearly organized.</h2></div><div className="grid">{products.map((product) => <article className="card" key={product.code}><span>{product.code}</span><div className="shape" /><p>{product.category}</p><h3>{product.name}</h3><a href="#details">View item →</a></article>)}</div></section><section className="quote" id="details"><p className="eyebrow">B2B WORKFLOW</p><h2>Guide buyers from category to quote request.</h2><p>Static sample content only. No customer information or production integrations are included.</p></section><footer>Frontend demonstration · React + Vite · No API or client data</footer></main>
}
