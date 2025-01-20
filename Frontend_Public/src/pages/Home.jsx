import BestSeller from '@/components/BestSeller'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import LetestCollection from '@/components/LetestCollection'
import Navbar from '@/components/Navbar/Navbar'
import NewsLetterBox from '@/components/NewsLetterBox'
import OurPolicy from '@/components/OurPolicy'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='ml-4 mr-4'>
      <LetestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home