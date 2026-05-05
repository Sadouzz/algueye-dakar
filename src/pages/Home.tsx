import Hero from '../sections/Hero'
import Ticker from '../components/Ticker'
import StorySection from '../sections/StorySection'
import CollectionsGrid from '../sections/CollectionsGrid'
import SignaturePieces from '../sections/SignaturePieces'
import NaruGoor from '../sections/NaruGoor'
import KineticQuote from '../sections/KineticQuote'
import EventsSection from '../sections/EventsSection'
import Testimonials from '../sections/Testimonials'
import Newsletter from '../sections/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <StorySection />
      <CollectionsGrid />
      <SignaturePieces />
      <KineticQuote />
      <NaruGoor />
      <EventsSection />
      <Testimonials />
      <Newsletter />
    </>
  )
}
