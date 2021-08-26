import Deploy from "./TechDeploy.js";
import TechStack from "./TechStack.js";

export default function Tech() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Resources
            </span>
            <span className="mb-5 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"></span>
          </h1>
          <TechStack />
          <Deploy />
        </div>
      </div>
    </div>
  );
}
