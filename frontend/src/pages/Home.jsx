import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUtensils, FaCalendarAlt, FaUsers, FaStar, FaQuoteLeft } from 'react-icons/fa'

function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-100">
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Experience Culinary Excellence at </span>
                  <span className="block text-indigo-600 xl:inline">Our Restaurant</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Indulge in a symphony of flavors crafted by our award-winning chefs. From farm-fresh ingredients to exquisite presentation, every dish tells a story.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/reservations" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                      Reserve Your Table
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/menu" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                      Explore Our Menu
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Restaurant interior ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Signature Experience</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Elevating Your Dining Adventure
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Immerse yourself in a culinary journey that tantalizes your senses and creates lasting memories.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white">
                    <FaUtensils className="h-8 w-8" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Exquisite Cuisine</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Savor dishes crafted with passion using the finest locally-sourced ingredients.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white">
                    <FaCalendarAlt className="h-8 w-8" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Seamless Reservations</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Book your perfect dining experience with our user-friendly online system.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white">
                    <FaUsers className="h-8 w-8" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Exclusive Events</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Create unforgettable moments in our elegant private dining spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready for a culinary adventure?</span>
            <span className="block">Book your table today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Experience the perfect blend of ambiance, service, and gastronomic delights.
          </p>
          <Link
            to="/reservations"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Reserve Now
          </Link>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Testimonials</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              What Our Guests Say
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <FaQuoteLeft className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Amazing Experience</h3>
                      <p className="mt-5 text-base text-gray-500">
                        "The food was exceptional, and the service was impeccable. We'll definitely be coming back!"
                      </p>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/150?img=${item+10}`} alt="" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">John Doe</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="text-yellow-400 h-4 w-4" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home