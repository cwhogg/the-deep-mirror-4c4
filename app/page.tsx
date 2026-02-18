import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              The AI Enneagram Test That Actually Gets Your Type Right
            </h1>
            <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlike static surveys, our AI has real conversations. When you're uncertain or your responses reveal complexity, we explore deeper to get to the truth of your core motivations through dynamic dialogue.
            </p>
            <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white">
              Experience AI-Powered Enneagram Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Dynamic Questioning Instead of Static Surveys</h3>
              <p className="text-slate-700">Our AI adapts questions based on your responses, exploring nuances that predetermined surveys miss entirely.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Explores Contradictions in Real-Time</h3>
              <p className="text-slate-700">When responses seem inconsistent, we ask follow-up questions to understand what you actually mean.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Ongoing Refinement Over Time</h3>
              <p className="text-slate-700">Revisit and adjust your typing as understanding deepens or life circumstances change.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Situational Context Understanding</h3>
              <p className="text-slate-700">Apply type insights to specific relationships and workplace dynamics with guided exploration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">Experience the Accuracy Difference of Conversational AI Assessment</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg max-w-3xl mx-auto">
              <p className="text-slate-700 italic">
                "Unlike surveys that move to the next question, our AI asks: 'You mentioned feeling driven by success earlier, but now you're saying you avoid competition. Help me understand when each feels more true for you...'"
              </p>
              <p className="text-slate-600 mt-4 font-medium">Example of conversational intelligence in action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready for Accurate Enneagram Typing?</h2>
            <p className="text-xl text-slate-700 mb-8">Stop settling for generic survey results. Experience what conversational AI assessment can reveal about your true type.</p>
            <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white">
              Experience AI-Powered Enneagram Assessment
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}