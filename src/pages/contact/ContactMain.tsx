import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ContactHero from './ContactHero'
import ContactServices from './ContactServices'
import ContactFormSection from './ContactFormSection'

export default function ContactMain() {
  const [searchParams] = useSearchParams()
  const subjectParam = searchParams.get('subject')
  const [selectedSubject, setSelectedSubject] = useState('Residential Solar')

  useEffect(() => {
    if (subjectParam) {
      setSelectedSubject(subjectParam)
    }
  }, [subjectParam])

  return (
    <>
      <ContactHero />
      <ContactServices onSelectService={setSelectedSubject} selectedSubject={selectedSubject} />
      <ContactFormSection selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} />
    </>
  )
}

