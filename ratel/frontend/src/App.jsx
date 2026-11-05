const products = [
  { category: 'Workwear', name: 'Utility jacket', code: 'WORK-001' },
  { category: 'Visibility', name: 'Reflective vest', code: 'WORK-002' },
  { category: 'Footwear', name: 'Safety trainer', code: 'WORK-003' },
]

export default function App() {
  return <main><nav><span className="brand">WORKWEAR / DEMO</span><span>Catalogue · Collections · Contact</span></nav><section className="hero"><p className="eyebrow">SANITIZED PORTFOLIO SAMPLE</p><h1>Uniforms and protection for every shift.</h1><p>A professional workwear catalogue concept, designed to make category navigation immediate and clear.</p><button type="button">Explore the range</button></section><section className="section"><div className="section-heading"><p className="eyebrow">PRODUCT DISCOVERY</p><h2>Workwear selected by role and environment.</h2></div><div className="grid">{products.map((product) => <article className="card" key={product.code}><span>{product.code}</span><div className="shape" /><p>{product.category}</p><h3>{product.name}</h3><a href="#details">View item →</a></article>)}</div></section><section className="quote" id="details"><p className="eyebrow">B2B WORKFLOW</p><h2>Turn a large range into an easy purchase journey.</h2><p>Static sample content only. No customer information or production integrations are included.</p></section><footer>Frontend demonstration · React + Vite · No API or client data</footer></main>
}
