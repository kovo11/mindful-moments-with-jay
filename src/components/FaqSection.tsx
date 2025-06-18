
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItemProps {
  question: string;
  answer: string;
}

const faqItems: FaqItemProps[] = [
  {
    question: "Is this a paid feature or advertisement?",
    answer: "No. We never accept payment for features. Guests are selected based on the strength, sincerity, and alignment of their story with the values of On Purpose. The production support fee only covers the technical and creative work that goes into making your episode shine."
  },
  {
    question: "What does the production fee cover?",
    answer: "Your one-time contribution supports: Studio time or remote technical setup, Professional editing and audio mastering, Custom-designed quote graphics, Promotional video clips for social sharing, Guest onboarding, prep, and post-production. You walk away with a professional storytelling package — even if your episode isn't published immediately."
  },
  {
    question: "How much is the production support fee?",
    answer: "The fee is disclosed only after you're shortlisted, to avoid any misunderstandings about \"pay-to-play.\" It's kept affordable, and it directly funds your story's visibility and reach."
  },
  {
    question: "Is the fee refundable?",
    answer: "No. Once production begins, the team allocates resources, time, and design work toward your episode. However, you'll always receive your final media assets — regardless of publishing schedule."
  },
  {
    question: "Why not cover the cost for guests?",
    answer: "We deeply value your story, which is why we handle everything from scripting to graphics. However, we don't run ads or sponsors for this series. Instead, we invite guests to co-invest in the quality and visibility of their feature — so it's sustainable, not commercialized."
  },
  {
    question: "Who produces this series?",
    answer: "This special series is created by a Mindvalley-certified production team in creative collaboration with past On Purpose contributors. While inspired by Jay Shetty's message, this is an independent production built around shared values of growth, vulnerability, and authenticity."
  },
  {
    question: "What happens after I apply?",
    answer: "Once you apply: 1. Our team reviews your story for alignment 2. If shortlisted, you'll receive a confirmation email and next steps 3. You'll then receive a link to confirm your spot with the production support fee 4. We'll book your pre-recording call, and walk you through prep 5. Your recording takes place — virtually or in-studio"
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about sharing your story on "Real People, Real Stories." 
            Can't find your answer? Feel free to contact us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="mb-2">Contact our team for more information:</p>
            <p className="text-purple-700 dark:text-purple-400">stories@onpurpose.me</p>
            <p className="text-purple-700 dark:text-purple-400">+1 (888) 555-0123</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
