import { useEffect, useState } from 'react'
import './Slider.css'
import slideOne from '../assets/slider/0.webp'
import slideTwo from '../assets/slider/1.webp'
import slideThree from '../assets/slider/2.webp'

const slides = [
  {
    image: slideOne,
    title: 'Grand Theft Auto VI',
    subtitle: 'The next chapter in the Grand Theft Auto saga is almost here.'
  },
  {
    image: slideTwo,
    title: 'Red Dead Redemption',
    subtitle: 'Experience the frontier with breathtaking landscapes and stories.'
  },
  {
    image: slideThree,
    title: 'Rockstar Games Launcher',
    subtitle: 'Discover new releases, updates, and exclusive content in one place.'
  }
]

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="hero-slider" aria-label="Featured content slider">
      <div
        className="hero-slide"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-label">Featured release</p>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>
          <div className="hero-actions">
            <a href="#" className="hero-primary">Explore now</a>
            <a href="#" className="hero-secondary">Watch trailer</a>
          </div>
        </div>
      </div>

      <div className="hero-dots" role="tablist" aria-label="Select slide">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Slider
