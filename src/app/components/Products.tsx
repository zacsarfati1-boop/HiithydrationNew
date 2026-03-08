import { ProductCard } from './ProductCard';

export function Products() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          <ProductCard
            title="Passionfruit"
            flavor="Tropical Energy"
            color="#9333EA"
            image="https://images.unsplash.com/photo-1539236482164-5598a8543fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZydWl0JTIwZHJpbmslMjBvcmFuZ2V8ZW58MXx8fHwxNzcyODYzMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            delay={0}
          />
          <ProductCard
            title="Lemon Lime"
            flavor="Citrus Refresh"
            color="#10B981"
            image="https://images.unsplash.com/photo-1539236482164-5598a8543fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZydWl0JTIwZHJpbmslMjBvcmFuZ2V8ZW58MXx8fHwxNzcyODYzMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}