import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { MapPinIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import SocialIcon from '@/components/social-icons'
import ProfileImage from '@/data/profile.jpg'
import Projects from '@/components/Projects'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import {
  Code,
  FileText,
  HelpCircle,
  Users,
  TrendingUp,
  FolderGit2,
  Star,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  ReactIcon,
  NextJsIcon,
  NodeIcon,
  TailwindIcon,
  TypeScriptIcon,
  ExpressIcon,
  AWSIcon,
  DockerIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  PythonIcon,
} from '@/components/social-icons/tech-icons'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="flex flex-col space-x-10 md:flex-row lg:flex-row">
        <div className="mr-10">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-zinc-500 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
            Hi, I'm Shubham 👋
          </h2>
          <p className="mt-5">
            Full stack developer (React.js & Python) with a focus on creating digital experiences
            that are simple, stunning, and responsive. Even though I have been creating web
            applications for over 2 years, I still love it as if it was something new. <br></br>
            <br></br>I am also aspiring to become a web artist, continually pushing the boundaries
            of design and functionality.
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4" />
              <span>Ghazipur, India</span>
            </div>
            <Badge
              variant="secondary"
              className="text-md mt-1 inline-flex items-center space-x-2 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span>Available for new projects</span>
            </Badge>
          </div>

          <div className="mt-5 flex space-x-4 text-zinc-700">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={5} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
            <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          </div>
        </div>
        <div className="image-border">
          <Image
            src={ProfileImage}
            alt="profile"
            height={500}
            width={600}
            className="hidden rounded-md object-contain sm:block"
          />
        </div>
      </div>

      <section className="mt-24">
        <Projects />
      </section>

      <div className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Technical blog</h2>
          <p className="px-3 py-2 text-gray-600 dark:text-gray-400">
            Explore my latest insights and technical articles
          </p>
        </div>

        {!posts.length && 'No posts found.'}

        <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, MAX_DISPLAY).map((post, index) => {
            const { slug, date, title, summary, tags, coverImage } = post
            return (
              <Link key={slug} href={`/blog/${slug}`} className="group cursor-pointer">
                <Card key={slug} className="flex h-full flex-col transition-shadow hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={coverImage}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-3">
                    <time className="mb-2 text-sm text-muted-foreground" dateTime={date}>
                      {formatDate(date, siteMetadata.locale)}
                    </time>
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{summary}</p>
                  </CardHeader>

                  <CardFooter className="mt-auto flex flex-col items-start px-3 pb-3">
                    <div className="flex flex-wrap gap-1">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="px-2 py-1 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}

      <section className="mt-24 space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">My Services</h2>
          <p className="mx-auto max-w-[600px] text-gray-500">
            I offer a range of services to help bring your digital projects to life. From full-stack
            development to technical writing and expert guidance, I'm here to support your success.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Code className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-semibold">Full Stack Web Development</h3>
              <p className="mb-4 text-sm text-gray-500">
                Give me a design file, and I'll convert it into a fully functional website and
                deploy it. My tech stack includes React, Next.js, Python, Fast API, Flask and MongoDB/Postgres DB.
              </p>
            </CardContent>
            <CardFooter className="mt-auto flex flex-col items-center text-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="mailto:shubham12342019@gmail.com?subject=Full%20Stack%20Web%20Development%20Inquiry">
                  Get a Quote
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <FileText className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-semibold">Technical Writing</h3>
              <p className="mb-4 text-sm text-gray-500">
                I specialize in creating clear, concise, and informative technical content. From
                documentation to tutorials, I'll help communicate complex ideas effectively.
              </p>
            </CardContent>
            <CardFooter className="mt-auto flex flex-col items-center text-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="mailto:shubham12342019@gmail.com?subject=Technical%20Writing%20Inquiry">
                  Request Content
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <HelpCircle className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-semibold">Guidance</h3>
              <p className="mb-4 text-sm text-gray-500">
                Stuck with issues in your application or need tips? I'm here to help. Get expert
                guidance and support to overcome challenges and improve your projects.
              </p>
            </CardContent>
            <CardFooter className="mt-auto flex flex-col items-center text-center">
              <Button className="mt-auto" variant="outline" size="sm" asChild>
                <Link href="mailto:shubham12342019@gmail.com?subject=Guidance%20and%20Consultation%20Inquiry">
                  Schedule Consultation
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter">My Tech Stack</h2>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
          <div className="flex flex-col items-center justify-center">
            <ReactIcon className="mb-2 h-12 w-12 text-[#61DAFB]" />
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <NextJsIcon className="mb-2 h-12 w-12 text-[#000000]" />
            <span className="text-sm font-medium">Next.js</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <PythonIcon className="mb-2 h-12 w-12 text-[#3776AB]" />
            <span className="text-sm font-medium">Python</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <MongoDBIcon className="mb-2 h-12 w-12 text-[#47A248]" />
            <span className="text-sm font-medium">MongoDB</span>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <DockerIcon className="mb-2 h-12 w-12 text-[#2496ED]" />
            <span className="text-sm font-medium">Docker</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <AWSIcon className="mb-2 h-12 w-12 text-[#FF9900]" />
            <span className="text-sm font-medium">AWS</span>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      {/* <section className="mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2 text-center">
            <Users className="w-6 h-6 mx-auto mb-4 text-primary" />
            <div className="text-2xl font-bold">12K</div>
            <div className="text-sm text-gray-500">Clients</div>
          </div>
          <div className="space-y-2 text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-4 text-primary" />
            <div className="text-2xl font-bold">55%</div>
            <div className="text-sm text-gray-500">Annual growth</div>
          </div>
          <div className="space-y-2 text-center">
            <FolderGit2 className="w-6 h-6 mx-auto mb-4 text-primary" />
            <div className="text-2xl font-bold">5k</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div className="space-y-2 text-center">
            <Star className="w-6 h-6 mx-auto mb-4 text-primary" />
            <div className="text-2xl font-bold">80%</div>
            <div className="text-sm text-gray-500">Positive ratings</div>
          </div>
        </div>
      </section> */}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
