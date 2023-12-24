import React from "react";
import { Accordion } from "flowbite-react";

const Faq = ({ faq, nos }) => {
  return (
    <div className="my-3">
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title className="text-white hover:text-black">{faq.question}</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-200 dark:text-gray-400">
              {faq.answer}
            </p>
            <p className="text-gray-200 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Faq;
