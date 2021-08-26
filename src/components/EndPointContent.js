export default function EndPointContent() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex">
          <div className="mt-6 flex">
            <div className="mr-4 flex-shrink-0"></div>
            <div className="border-solid border-4 m-4 p-8 grid grid-cols-4">
              <div>
              <p>
              GET
              </p>
              <a href="https://warm-gorge-13979.herokuapp.com/api/v1/drinks">
              <p>
              https://warm-gorge-13979.herokuapp.com/api/v1/drinks
              </p>
              </a>
              <p>
              https://warm-gorge-13979.herokuapp.com/api/v1/drinks/:id
              </p>

              </div>
              <p>
              PUT
              </p>
              <p>
              https://warm-gorge-13979.herokuapp.com/api/v1/drinks/:id
              </p>
              <p>
              DELETE
              </p>
              <p>
              https://warm-gorge-13979.herokuapp.com/api/v1/drinks/:id
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
