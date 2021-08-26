import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Latte',
    description: 'As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.',
  },
  {
    name: 'Americano',
    description: 'With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.',
  },
  {
    name: 'Espresso',
    description: 'An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.',
  },
  {
    name: 'Mocha',
    description: 'For all you chocolate lovers out there, you’ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.',
  },
  {
    name: 'Classic Drip',
    description: 'Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.',
  },
  {
    name: 'Cappuccino',
    description: 'Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.',
  },
  {
    name: 'Macchiato',
    description: 'The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.',
  },
  {
    name: 'Red Eye',
    description: 'Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.',
  },
]
export default function AboutContent() {
  return (

          <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">All-in-one platform</h2>
          <p className="mt-4 text-lg text-gray-500">
            
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
