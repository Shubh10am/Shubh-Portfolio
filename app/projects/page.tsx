import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import Projects from '@/components/Projects'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function index() {
  return <Projects />
}
