import Head from 'next/head';
import Image from 'next/image';
import coursesData from '../utils/courses';

const paystackUrl = 'https://paystack.shop/pay/bmyvymq01b';

const Courses = () => {
  return (
    <>
      <Head>
        <title>Courses | CB Portfolio</title>
        <meta
          name="description"
          content="Browse African-inspired courses and pay instantly through Paystack."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-orange-400 via-rose-300 to-slate-950 text-white">
        <div className="relative overflow-hidden py-24 px-6 md:px-16 lg:px-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-orange-500/80 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-amber-200/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-100">
              New Era Courses
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Learn with a bright, warm African sunrise feel
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-amber-100/90 sm:text-lg">
              Cohort starts 18th May, 2026. View course details here, then use the single Paystack button below to enroll.
            </p>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-6 pb-24 md:px-16">
          <div className="grid gap-8 md:grid-cols-2">
            {coursesData.map((course) => (
              <article
                key={course.id}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-[0_25px_100px_-60px_rgba(249,115,22,0.8)]"
              >
                <div className="relative h-64 sm:h-72">
                  <Image
                    src={`/${course.image}`}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    loading={course.id === 1 ? 'eager' : 'lazy'}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
                </div>

                <div className="space-y-6 px-6 py-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-100">
                      {course.tag}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">{course.title}</h2>
                    <p className="text-sm text-amber-100/85 leading-7">{course.description}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-amber-100/85">
                      <span className="block text-xs uppercase tracking-[0.2em] text-amber-100/70">Duration</span>
                      <span className="mt-2 block font-semibold">{course.duration}</span>
                    </div>
                    <div className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-amber-100/85">
                      <span className="block text-xs uppercase tracking-[0.2em] text-amber-100/70">Time</span>
                      <span className="mt-2 block font-semibold">{course.hoursPerDay}</span>
                    </div>
                  </div>

                  <p className="text-sm text-amber-100/80">{course.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
            <p className="mx-auto max-w-3xl text-base text-amber-100/85">
              The next cohort starts 18th May, 2026. Secure your spot with one payment below and join any of these courses. Select what course you are paying for on the Paystack page.
            </p>
            <a
              href={paystackUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Pay with Paystack
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Courses;
