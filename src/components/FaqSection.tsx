
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
    question: "Is there any cost to participate?",
    answer: "No, there are no fees required to participate. Once you pass our verification process, you'll gain free access to join a group session with Mel Robbins and have your story featured to our 25M+ global audience."
  },
  {
    question: "What is the verification process?",
    answer: "We verify your identity, location, and business background to ensure authentic storytelling. This process typically takes 3-5 business days and helps us maintain the quality and trust our audience expects from real transformation stories."
  },
  {
    question: "How does the group session work?",
    answer: "After verification, you'll join a 20-minute group preparation call, followed by a 60-90 minute recording session with Mel Robbins and other verified storytellers. This intimate group setting allows for deeper connection and more impactful storytelling."
  },
  {
    question: "What happens to my story after recording?",
    answer: "Your story will be professionally edited and distributed to Mel's 25M+ followers across all platforms. You'll receive promotional support, lifetime access to your episode, and a certificate of participation."
  },
  {
    question: "Can I review my story before it's published?",
    answer: "Yes, you maintain full control over your narrative throughout the process. You'll have the opportunity to review and approve your story before it goes live to ensure it represents your experience authentically."
  },
  {
    question: "Who is eligible to apply?",
    answer: "We welcome applications from anyone with a genuine transformation story that can inspire others to take action. Our verification process ensures we feature authentic stories from real people who have overcome challenges and created meaningful change."
  },
  {
    question: "What happens after I apply?",
    answer: "Once you apply: 1. Our team reviews your story for impact and authenticity 2. If selected, we begin the verification process 3. After verification, you'll join the group preparation call 4. Finally, you'll participate in the group recording session with Mel Robbins"
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
