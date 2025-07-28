import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';

import AvatarImage from '../../public/assets/blog/authors/sirizqi.png';
import { Container } from '../components/Container';
import { ExternalLink } from '../components/ExternalLink';
import { PageTitle } from '../components/PageTitle';
import { Quote } from '../components/Quote';
import { Section } from '../components/Section';
import { SocialLink } from '../components/SocialLink';
import {
  AboutExtended,
  Blogs,
  Books,
  PeopleWorthFollowingOnTwitter,
  Podcasts,
  Quotes,
  SocialMedia,
  VideosWorthWatching,
} from '../data/lifeApi';

const seoTitle = `About`;
const seoDescription = `A few words about me and my personal life.`;

export default function AboutMe() {
  const randomQuote = useMemo(() => Quotes[Math.floor(Math.random() * Quotes.length)], []);

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/about`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={AvatarImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <PageTitle>Hi, I&apos;m Rizqi Sarasajati.</PageTitle>
            <div className="mt-6 text-base">{AboutExtended}</div>
            <div className="mt-6 flex gap-6">
              {SocialMedia.map((socialProfile) => (
                <SocialLink
                  key={socialProfile.name}
                  aria-label={`Follow on ${socialProfile.name}`}
                  href={socialProfile.link}
                  icon={socialProfile.icon}
                />
              ))}
            </div>

            <Section>
              <Section.Title as="h2">Things I’ve Built, Led, and Learned From</Section.Title>
              <Section.Content>
                Hi! I’m a Product Manager with 10+ years of experience in building meaningful digital products. My journey started as a Back-End Software Engineer, then took a few exciting turns — from being a Teacher, UI/UX Designer, Associate Product Manager, to Technical Product Manager — before fully committing to what I love most: building impactful products as a Product Manager. I’m passionate about solving real-world problems through tech, and I genuinely believe that great products are built through strong collaboration and clear communication.
                <br />
                <br />Along the way, I’ve helped companies across the globe build applications from the ground up — tools that not only work but truly help people in their everyday lives.{' '}
                <ExternalLink href={'https://kiriminaja.com'}>KiriminAja</ExternalLink>,{' '}
                <ExternalLink href={'https://aonia.ai'}>Aonia AI</ExternalLink>,{' '}
                <ExternalLink href={'https://passionjapan.com'}>PassionJapan</ExternalLink>,{' '}
                <ExternalLink href={'https://rajaongkir.com/api'}>RajaOngkir</ExternalLink>,{' '}
                <ExternalLink href={'https://komship.id'}>Komship</ExternalLink> or{' '}
                <ExternalLink href={'https://komads.id'}>KomAds</ExternalLink>. I’ve led dev teams more times than I’ve had coffee spills during stand-ups (which is a lot 😅).
If you think we’d vibe well or wanna build something cool together, don’t be shy.{' '}
                <ExternalLink href="mailto:rizqisarasajati1109@gmail.com">Let&#39;s chat!</ExternalLink>
              </Section.Content>
            </Section>
            <Section>
              <Section.Title as="h2">Books That Keep Pulling Me Back (Like a Bookworm Magnet 🧲)</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {Books.map((book) => (
                    <li key={book.name}>
                      <ExternalLink href={book.link}>{book.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section>
            <Section>
              <Section.Title as="h2">Pods That Power My Brain ☕️🎙️</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {Podcasts.map((podcast) => (
                    <li key={podcast.name}>
                      <ExternalLink href={podcast.link}>{podcast.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section>
            <Section>
              <Section.Title as="h2">Brain Snacks I Can’t Resist 🧠🍪</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {Blogs.map((blog) => (
                    <li key={blog.name}>
                      <ExternalLink href={blog.link}>{blog.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section>
            <Section>
              <Section.Title as="h2">Videos That Stole My Attention (and My Time 😅)</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {VideosWorthWatching.map((video) => (
                    <li key={video.name}>
                      <ExternalLink href={video.link}>{video.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section>
            <Section>
              <Section.Title as="h2">Tiny Text, Heavy Meaning 🧠💬</Section.Title>
              <Section.Content>
                <div className="mt-8">
                  <Quote quote={randomQuote.content} author={randomQuote.author} />
                </div>
              </Section.Content>
            </Section>
          </div>
        </div>
      </Container>
    </>
  );
}
