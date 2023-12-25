import React from "react";

const Footer = () => {
  return (
    <footer class="p-4 bg-transparent md:p-8 lg:p-10">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src="https://imgs.search.brave.com/o_Qfx8kjPHmgW0HIEMncXFwKp9f3nxAjtmPl3sBE9lU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmZseGV4dC5j/b20vZmZlL3NpdGV1/aS9hY3F1aXNpdGlv/bi9ob21lL25mbHhs/b2dvLnBuZw"
            alt=""
          />
        </a>
        <p class="my-6 text-gray-200 dark:text-gray-400">
          Entertain Your loved ones in home
        </p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-white">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Premium
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Campaigns
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Affiliate Program
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2021-2022{" "}
          <a href="#" class="hover:underline">
            Netflix™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
