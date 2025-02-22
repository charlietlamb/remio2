import { Faq } from '../site/index/faq'
import { PricingCard } from '../site/pricing/pricing-card'
import PricingCta from '../site/pricing/pricing-cta'
import { pricingTiers } from '../site/pricing/pricing-data'

export function Pricing() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col">
      <span className="font-bold uppercase text-primary text-center">
        Pricing
      </span>
      <h1 className="font-heading font-bold text-4xl text-center mb-2">
        Choose Your Plan
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        Choose the plan that best suits your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <PricingCard key={index} tier={tier} />
        ))}
      </div>
      <Faq />
      <PricingCta />
    </div>
  )
}
