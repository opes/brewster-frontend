export default function EndPointContent() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex">
          <div className="mt-6 flex">
            <div className="mr-4 flex-shrink-0"></div>
            <div className="border-solid border-4 m-4 p-8 grid grid-cols-2">
              <div>
              <p className="text-lg font-bold">
              GET all drinks
              </p>
              <a href="https://warm-gorge-13979.herokuapp.com/api/v1/drinks">
              <p className="text-blue-700">
              https://warm-gorge-13979.herokuapp.com/api/v1/drinks
              </p>
              </a>
              <p className="text-lg font-bold mt-2">
              GET drinks by "Espresso"
              </p>
              <a href="https://warm-gorge-13979.herokuapp.com/api/v1/drinks?type=espresso">
              <p className="text-blue-700">
              https://warm-gorge-13979.herokuapp.com/api/v1/drinks?type=espresso
              </p>
              </a>
              <p className="text-lg font-bold mt-2">
              GET drinks by "Drip"
              </p>
              <a href="https://warm-gorge-13979.herokuapp.com/api/v1/drinks?type=drip">
              <p className="text-blue-700">
              https://warm-gorge-13979.herokuapp.com/api/v1/drinks?type=drip
              </p>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
