const products = [
  { category: 'New arrivals', name: 'Structured overshirt', code: 'STYLE-001' },
  { category: 'Essentials', name: 'Relaxed knit', code: 'STYLE-002' },
  { category: 'Accessories', name: 'Canvas carryall', code: 'STYLE-003' },
]

export default function App() {
  return <main><nav><span className="brand">STUDIO / DEMO</span><span>New in · Collection · Journal</span></nav><section className="hero"><p className="eyebrow">SANITIZED PORTFOLIO SAMPLE</p><h1>Everyday pieces, considered.</h1><p>An editorial storefront concept for a fashion collection, designed around discovery and a calm visual hierarchy.</p><button type="button">Explore collection</button></section><section className="section"><div className="section-heading"><p className="eyebrow">THE EDIT</p><h2>Pieces made to be seen together.</h2></div><div className="grid">{products.map((product) => <article className="card" key={product.code}><span>{product.code}</span><div className="shape" /><p>{product.category}</p><h3>{product.name}</h3><a href="#details">View item →</a></article>)}</div></section><section className="quote" id="details"><p className="eyebrow">STOREFRONT UX</p><h2>Make collections feel deliberate before the first click.</h2><p>Static sample content only. No customer information or production integrations are included.</p></section><footer>Frontend demonstration · React + Vite · No API or client data</footer></main>
}
