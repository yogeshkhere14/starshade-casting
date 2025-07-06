import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'
import {
  AlertIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
} from '@/components/SocialIcons'
import clsx from 'clsx'
import Link from 'next/link'

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <div className="align-center flex flex-col justify-between sm:flex-row">
        <div>
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <AlertIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Join the Casting List</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Submit your interest and we’ll let you know about upcoming roles.
          </p>
        </div>
        <div className="mt-4 flex items-center sm:mt-0">
          <Button
            type="submit"
            href={'https://forms.gle/pGbGfZitbG5QFi8m6'}
            target="_blank"
            className="w-full flex-none sm:w-auto"
          >
            Submit Interest
          </Button>
        </div>
      </div>
    </form>
  )
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Contact Us" 
      intro="We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us. Our team is here to assist you with anything you need."
    >
      <div className="mx-auto max-w-7xl">
        <Newsletter />
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h3 className="border-l-2 border-teal-600 pl-7 font-semibold text-zinc-800 dark:text-zinc-100">
              Starshade Casting
            </h3>
            <address className="border-l-2 border-gray-200 pt-2 pl-6 text-zinc-600 not-italic dark:text-zinc-400">
              <SocialLink
                href="mailto:starshadecasting@test.com"
                icon={MailIcon}
                className="mt-4"
              >
                starshadecasting@gmail.com
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/starshadecasting?igsh=OGczdzlhYm1wb2lu"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <p className="py-5"></p>
            </address>
          </div>

          <div>
            <h3 className="border-l-2 border-teal-600 pl-7 font-semibold text-zinc-800 dark:text-zinc-100">
              Nitin Mahesh Joshi
            </h3>
            <address className="border-l-2 border-gray-200 pt-2 pl-6 text-zinc-600 not-italic dark:text-zinc-400">
              <SocialLink
                href="mailto:nitin@test.com"
                icon={MailIcon}
                className="mt-4"
              >
                imnmjwork@gmail.com
              </SocialLink>
              <SocialLink
                href="tel:+919920696077"
                icon={PhoneIcon}
                className="mt-4"
              >
                +91 9920696077
              </SocialLink>
              <p className="py-5"></p>
            </address>
          </div>
          <div>
            <h3 className="border-l-2 border-teal-600 pl-7 font-semibold text-zinc-800 dark:text-zinc-100">
              Sahaj Bhadoria
            </h3>
            <address className="border-l-2 border-gray-200 pt-2 pl-6 text-zinc-600 not-italic dark:text-zinc-400">
              <SocialLink
                href="mailto:sahaj@test.com"
                icon={MailIcon}
                className="mt-4"
              >
                sahajbhadoria@gmail.com
              </SocialLink>
              <SocialLink
                href="tel:+919323349271"
                icon={PhoneIcon}
                className="mt-4"
              >
                +91 9323349271
              </SocialLink>
              <SocialLink
                href="tel:+917000911948"
                icon={PhoneIcon}
                className="mt-4"
              >
                +91 7000911948
              </SocialLink>
            </address>
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}
