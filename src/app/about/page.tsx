import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  ImdbIcon,
  MailIcon,
  PhoneIcon,
} from '@/components/SocialIcons'
import portraitImageSahaj from '@/images/sahaj-portrait.jpg'
import portraitImageNitin from '@/images/nitin-portrait.jpg'

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
        target='_blank'
        rel='noopener noreferrer'
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mt-8 sm:mt-16 lg:order-first lg:row-span-2">
        {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          Note From the Founders
        </h1> */}
        <div className="mt-6 space-y-7 text-lg text-zinc-600 dark:text-zinc-400">
          <p>
            At StarShade Casting, we believe casting is more than just filling
            roles — it&apos;s a responsibility to the story, to the creator, and
            to the actor. Our goal is to build a casting ecosystem that&apos;s
            transparent, inclusive, and guided by integrity. Whether it&apos;s a
            newcomer seeking their first break or a seasoned performer ready for
            their next big leap, we&apos;re here to connect talent with
            opportunity in the most meaningful way.
          </p>
        </div>
      </div>
      <div className="mt-4 sm:mt-8 lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          Meet the Founders
        </h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            Get to know the minds and hearts behind StarShade Casting — the
            people committed to shaping the future of performance with integrity
            and instinct.
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-y-16 sm:mt-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImageSahaj}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            I&apos;m Sahaj Bhadoria — a casting director driven by instinct,
            purpose, and a passion for storytelling.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I began my journey in the entertainment industry as an actor and
              assistant director, but it was in casting that I found my true
              calling. Since stepping into the role of Associate Casting
              Director in 2017, I&apos;ve had the opportunity to work on a wide
              range of projects — from Puncch Beat and Class of 2020 to Cartel,
              Hostel Daze 3, Flames 3, IRL: In Real Love, and Lust Stories 2.
            </p>
            <p>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister&apos;s motorcycle helmet,
              counted down from three, and jumped — hoping the tree was tall
              enough that with just a bit of momentum I&apos;d be able to get to
              orbit.
            </p>
            <p>
              During my time with The Casting Bay, I contributed to several
              acclaimed projects for Netflix and Amazon Prime Video, including
              Sector 36, The Mehta Boys, Chhorii 2, and Panchayat Season 3.
              These experiences helped me sharpen my eye for talent, build
              creative relationships, and truly understand the power of great
              casting.
            </p>
            <p>
              In 2024, I co-founded StarShade Casting to champion emerging and
              underrepresented talent. My goal is to make the casting process
              more fair, transparent, and creatively fulfilling — helping actors
              unlock their full potential and bring unforgettable performances
              to life.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink> */}
            <SocialLink href="https://www.instagram.com/imsahajbhadoria/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://www.imdb.com/name/nm5354358/" icon={ImdbIcon} className="mt-4">
              Follow on IMDB
            </SocialLink>
            {/* <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink> */}
            {/* <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink> */}
            <SocialLink
              href="mailto:sahaj@test.com"
              icon={MailIcon}
              className="mt-4"
            >
              sahajbhadoria@gmail.com
            </SocialLink>
            <SocialLink href="tel:+919323349271" icon={PhoneIcon} className="mt-4">
              +91 9323349271 | +91 7000911948
            </SocialLink>
          </ul>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-1 gap-y-16 sm:mt-32 lg:order-first lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pr-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImageNitin}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            I&apos;m Nitin Mahesh Joshi — a casting director, poet, and
            performer who sees storytelling from every side of the lens.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I began my journey in casting in 2015 at Casting Bay, contributing
              to early breakthrough projects like Secret Superstar and
              Phillauri. As my career evolved, I took on the role of Assistant
              Casting Director for films such as Raid and Batti Gul Meter Chalu,
              and later worked as Associate Casting Director on Marjaavaan.
              These experiences sharpened my creative instincts and deepened my
              understanding of the casting process.
            </p>
            <p>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister&apos;s motorcycle helmet,
              counted down from three, and jumped — hoping the tree was tall
              enough that with just a bit of momentum I&apos;d be able to get to
              orbit.
            </p>
            <p>
              Over the years, I&apos;ve collaborated with top industry
              professionals like Shivam Gupta and Romil Modi, including my work
              as Associate Casting Director on the Prime Video series Big Girls
              Don&apos;t Cry. Working across such a wide range of projects has
              given me a unique eye for talent and a deep respect for the
              nuances of performance.
            </p>
            <p>
              I&apos;m also an actor and a poet — with a formal background in
              Theatre and Dramatic Arts from FLAME University. My role as Raja
              in Mirzapur on Amazon Prime Video gave me the rare opportunity to
              experience storytelling from in front of the camera, something
              that continues to inform how I work with actors.
            </p>
            <p>
              In 2024, I co-founded StarShade Casting with a vision to cast with
              heart, honesty, and intent. I&apos;m here to help artists connect
              with stories that matter — and bring characters to life in the
              most authentic way possible.
            </p>
          </div>
        </div>
        <div className="lg:pr-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/nitinmaheshjoshi/?hl=en" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>

            <SocialLink href="https://www.imdb.com/name/nm10242507/" icon={ImdbIcon} className="mt-4">
              Follow on IMDB
            </SocialLink>
            <SocialLink
              href="mailto:nitin@test.com"
              icon={MailIcon}
              className="mt-4"
            >
              imnmjwork@gmail.com
            </SocialLink>
            <SocialLink href="tel:+919920696077" icon={PhoneIcon} className="mt-4">
              +91 9920696077
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
