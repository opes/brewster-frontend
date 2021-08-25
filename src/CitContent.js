/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function CitationContent() {
    return (
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">

          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Citations
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Tailwind UI
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              pre-made Tailwind CSS components........
              kjdfkadjf

              dffdf
            </p>
            <figure>
            <img
              className="w-full rounded-lg"
              src="/tailwindui.png"
              alt="Tailwind UI"
              width={1310}
              height={873}
            />
          </figure>
          </div>
        </div>
      </div>
    )
  }
