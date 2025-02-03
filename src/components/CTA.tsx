import { Button } from "@/components/ui/button"

const CTA = () => {
  return (
    <section className="py-20 bg-medibill-blue text-white">
      <div className="container mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Ready to
                  SimplifyYour Medical Bills?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied users who have taken control of
                  their healthcare expenses with MediBillSplit.
        </p>
        <Button size="lg" variant="secondary">
          Get Started for Free
        </Button>
      </div>
    </section>
  )
}

export default CTA

