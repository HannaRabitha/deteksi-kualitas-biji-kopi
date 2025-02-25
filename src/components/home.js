import Container from './container';
import Footer from './footer';

function Home() {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full xl:p-8 md:p-8 lg:w-1/2">
          <div className="max-w-2xl mb-8">
            {/* <img
              className="h-40 hidden md:flex"
              src="logo.png"
              alt="Logo Acne Detector"
            /> */}

            <h1 className="text-4xl font-bold leading-snug tracking-tight text-[#CB5E86]">
            Jerawat Detector
            </h1>
            <img className="h-40" src={'undraw_Smiley.png'} alt="" />

            <p className="py-4 text-xl leading-normal text-justify text-gray-500 lg:text-xl xl:text-2xl">
            Jerawat adalah masalah kulit yang terjadi ketika pori-pori kulit, tepatnya folikel rambut, tersumbat oleh kotoran, debu, minyak, atau sel kulit mati. Akibatnya, terjadi peradangan pada pori-pori tersebut dan bisa juga disertai infeksi. Jerawat sering muncul di wajah, leher, punggung, atau dada. - alodokter
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/menu"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#CB5E86] hover:bg-[#A93761] rounded-md "
              >
                Get Started
              </a>
              {/* <a
                href=" "
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span> View on Github</span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="flex justify-end -mr-10">
            <img className='h-90 xl:-mt-44' src={'logo.png'} alt="" />
            {/* <Image
              src={heroImg}
              width="616"
              height="617"
              className={'object-cover'}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            /> */}
          </div>
        </div>
      </Container>

      <Footer />
      {/* <div className="-mt-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#6F4E37"
            fill-opacity="1"
            d="M0,64L60,96C120,128,240,192,360,208C480,224,600,192,720,160C840,128,960,96,1080,80C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </>
  );
}
export default Home;
