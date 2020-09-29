import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="md:flex justify-between py-20 px-10 bg-indigo-500 text-indigo-100">
        <div className="sm:w-4/5 md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white mb-6">Be Connected, Be Safer</h2>
          <p className="mb-6"> 
            Contact others, send locations and routes. Make sure that you arent walking alone.
          </p>
          <a href="#" class="inline-block py-3 px-6 text-lg bg-gray-400 text-gray-800 hover:bg-gray-300 rounded mr-2">Learn More</a>
          <a href="#" class="inline-block py-3 px-6 text-lg bg-orange-400 text-orange-800 hover:bg-orange-300 rounded">Get Started</a>
        </div>
        <div className="md:w-1/2">
          <img  className="rounded" src="https://icdn2.digitaltrends.com/image/digitaltrends/google-assistant-on-google-maps-best-ces-2019.jpg" />
        </div>
     </div>
    </div>
  )
}
