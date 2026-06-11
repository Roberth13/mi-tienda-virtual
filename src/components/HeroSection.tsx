
export default function HeroSection() {
  return (
    <div className="bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="relative overflow-hidden max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-dark-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 transition-colors duration-300">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Descubre la nueva</span>{' '}
                <span className="block text-primary-600">colección premium</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Productos exclusivos seleccionados pensando en ti. Calidad superior, diseño moderno y envío gratuito en tu primera compra.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button 
                    onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg shadow-primary-500/30"
                  >
                    Comprar ahora
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/banner.png"
            alt="Shopping experience"
          />
          {/* Gradients to blend image */}
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-dark-900 via-white/50 dark:via-dark-900/50 to-transparent lg:w-1/4"></div>
        </div>
      </div>
    </div>
  );
}
