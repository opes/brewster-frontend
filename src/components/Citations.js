export default function Citations() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <div className="mb-8">
            <hr></hr>
          </div>
          <h4 className="text-2xl font-bold">Citations</h4>

          <div className="mt-6 flex">
            <div className="mr-4 flex-shrink-0">
              <svg
                className="h-12 w-12"
                preserveAspectRatio="true"
                viewBox=".15 .13 799.7 479.69"
                aria-hidden="true"
              >
                <path
                  d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"
                  fill="#06b6d4"
                />
              </svg>
            </div>
            <div>
            <a href="https://www.tailwindui.com">
              <h4 className="text-lg font-bold">Tailwind UI</h4>
              </a>
              <p className="mt-1">
                We used several pre-made React components from Tailwind's UI
                library to bootstrap our front end.
              </p>
            </div>
            <figure>
              <img
                className="w-full rounded-lg"
                src="/tailwindui.png"
                alt="Tailwind UI"
                width={810}
                height={373}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
