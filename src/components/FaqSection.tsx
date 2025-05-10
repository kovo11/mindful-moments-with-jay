
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
    question: "What can I expect at a Jay Shetty meet & greet?",
    answer: "These exclusive events offer an intimate setting to connect with Jay personally. Each event typically includes a guided meditation, interactive Q&A session, personal stories and wisdom sharing from Jay, opportunities for photos, and a book signing. You'll also receive exclusive materials and resources to take home."
  },
  {
    question: "How long do the events typically last?",
    answer: "Most meet & greet events with Jay last approximately 3 hours. This includes welcome time, the main session, and post-event interactions. We recommend setting aside 4 hours total to allow for arrival and networking afterward."
  },
  {
    question: "Is there a dress code for the events?",
    answer: "We suggest business casual or smart casual attire. The most important thing is that you feel comfortable and present. Some attendees prefer to dress up a bit for photos with Jay, but it's entirely your preference."
  },
  {
    question: "Will I get a chance to speak with Jay personally?",
    answer: "Yes! These intimate events are specifically designed to allow for personal interaction with Jay. While the format varies slightly by location, all attendees will have an opportunity to meet Jay, take photos, and have books signed. Premium ticket holders receive additional one-on-one time."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand circumstances change. Cancellations made 30+ days before the event receive a full refund minus a $50 processing fee. Cancellations 14-29 days before the event receive a 50% refund. Unfortunately, we cannot offer refunds for cancellations less than 14 days before the event, but you may transfer your ticket to someone else."
  },
  {
    question: "Can I bring a guest who didn't purchase a ticket?",
    answer: "Due to the intimate nature of these events and venue capacity restrictions, only registered attendees with valid tickets may attend. Each person must have their own ticket, including children over 12 years of age."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about Jay Shetty's meet & greet events. 
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
            <p className="text-purple-700 dark:text-purple-400">events@jayshetty.me</p>
            <p className="text-purple-700 dark:text-purple-400">+1 (888) 555-0123</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
