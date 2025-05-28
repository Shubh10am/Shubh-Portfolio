import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import {
  WavesIcon as WaveIcon,
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
} from 'lucide-react'
import { Twitter } from './social-icons/icons'

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="mb-3 mt-16 flex flex-col items-center space-y-1">
        <div className="flex space-x-4 text-zinc-700">
          <span className="rounded-full p-2 hover:bg-gray-100">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          </span>
          <span className="rounded-full p-2 hover:bg-gray-100">
            <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          </span>
          <span className="rounded-full p-2 hover:bg-gray-100">
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
          </span>
          <span className="rounded-full p-2 hover:bg-gray-100">
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={5} />
          </span>
        </div>
        <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
