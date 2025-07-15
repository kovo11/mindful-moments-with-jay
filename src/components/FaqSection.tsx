
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
    answer: "No. We never accept payment for features. Guests are selected based on the impact, authenticity, and alignment of their story with Mel's mission of helping people take action. The production support fee only covers the technical and creative work that goes into making your episode powerful and professional."
  },
  {
    question: "What does the production fee cover?",
    answer: "Your one-time contribution supports: Professional recording setup (studio or remote), Expert editing and audio mastering, Custom-designed quote graphics for social sharing, Promotional video clips, Guest coaching and prep sessions, and complete post-production. You receive a full media package regardless of publishing timeline."
  },
  {
    question: "How much is the production support fee?",
    answer: "The fee is disclosed only after you're shortlisted based on your story's impact potential. We keep it affordable and transparent, with all funds directly supporting your story's professional production and visibility."
  },
  {
    question: "Is the fee refundable?",
    answer: "No. Once production begins, our team allocates significant resources, time, and expertise toward your episode. However, you'll always receive your complete media assets and professional recording - regardless of the publishing schedule."
  },
  {
    question: "Why not cover all costs for guests?",
    answer: "We deeply value authentic stories, which is why we provide extensive coaching, professional production, and marketing support. The co-investment model ensures sustainability while keeping the focus on genuine transformation stories rather than commercialized content."
  },
  {
    question: "Who produces this series?",
    answer: "This series is produced by Mel Robbins Media in collaboration with certified production professionals who share Mel's commitment to authenticity, action, and empowerment. While inspired by Mel's methods, this is an independent production focused on real transformation stories."
  },
  {
    question: "What happens after I apply?",
    answer: "Once you apply: 1. Our team reviews your breakthrough story for impact and authenticity 2. If selected, you'll receive confirmation and next steps 3. You'll get a link to secure your spot with the production support fee 4. We'll schedule your pre-recording coaching call 5. Your professional recording session takes place (virtual or in-studio)"
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about sharing your breakthrough story on "Real Change, Real Stories." 
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
          
          <div className="mt-10 p-6 bg-red-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="mb-2">Contact our team for more information:</p>
            <p className="text-red-700 dark:text-red-400">stories@melrobbins.com</p>
            <p className="text-red-700 dark:text-red-400">+1 (888) 555-0123</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
