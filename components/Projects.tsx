'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { X, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Project {
  id: number
  title: string
  description: string
  image: string
  details: string
  link?: string
  tags: Array<string>
}

const projects: Project[] = [
  {
    id: 1,
    title: 'HR AI Agentic',
    description: 'AI-Agent powered HR Assistant',
    image: '/static/images/hr_agentic.gif',
    details:
      'An intelligent HR AI Agent assistant that creates personalized tasks based on your specific preferences and organization needs. Leveraging advanced AI algorithms, it offers a seamless and intuitive experience for small startup individuals.',
    link: 'https://hr-agentic-ui.vercel.app/',
    tags: ['React', 'Tailwind CSS', 'Next.js', 'Gemini'],
  },
  // {
  //   id: 2,
  //   title: 'PDF Carousel Generator',
  //   description: 'LinkedIn content creator',
  //   image: '/static/images/project-2.gif',
  //   details:
  //     'A sophisticated tool designed to generate visually stunning PDF carousels optimized for LinkedIn. Enhance your professional presence with engaging, shareable content that stands out in the feed.',
  //   link: 'https://pdf-carousal.vercel.app',
  //   tags: ['React', 'Tailwind CSS', 'Pdf.js'],
  // },
  {
    id: 2,
    title: 'Charity Connect',
    description: 'Donation Site for Needed One',
    image: '/static/images/charity_connect.gif',
    tags: ['Python', 'Tailwind CSS', 'Flask', 'Gemini'],
    link: 'https://charityconnect-kloq.onrender.com/',
    details:
      'Essentially serves as a platform for beggars or people in need to seek help or charity online',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div className="container mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Personal Projects
        </motion.h2>
        <motion.p
          className="px-3 py-2 text-center text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Projects I've built, each built to solve a unique challenge.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="flex h-full cursor-pointer flex-col transition-shadow hover:shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-3 pb-0">
                  <div className="line-clamp-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow px-2 pb-2">
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="px-2 py-1 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-0 pb-2 transition-all duration-300 hover:px-2">
                  <Button
                    variant="ghost"
                    className="from-primary hover:text-primary-foreground group relative w-full justify-between overflow-hidden to-secondary transition-all duration-300 hover:bg-gradient-to-r"
                  >
                    <span className="relative z-10">View Project</span>
                    <ChevronRight
                      size={18}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-md rounded-lg bg-white p-6 dark:bg-gray-800"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div className="mb-4 flex items-start justify-between">
                <h2 className="text-2xl font-semibold">{selectedProject.title}</h2>
                <button
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {selectedProject.description}
              </p>
              <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="mb-4 max-h-32 overflow-y-auto text-sm text-gray-800 dark:text-gray-200">
                {selectedProject.details}
              </p>

              {selectedProject.link ? (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-blue-700"
                >
                  <span>Visit Project</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <button
                  className="w-full rounded-full bg-blue-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-blue-700"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
