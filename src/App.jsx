import { useMemo, useState } from 'react';

const IconSpark = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 3.75 13.65 9l5.1 2.25-5.1 2.25L12 18.75 10.35 13.5 5.25 11.25 10.35 9 12 3.75Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M6 5.25 6.6 7.2 8.25 7.8 6.6 8.4 6 10.35 5.4 8.4 3.75 7.8 5.4 7.2 6 5.25Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M18 5.25 18.6 7.2 20.25 7.8 18.6 8.4 18 10.35 17.4 8.4 15.75 7.8 17.4 7.2 18 5.25Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const IconClock = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="8.25"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12 7.5v4.25l2.75 1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMedal = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="m7 3 5 6 5-6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="15.5"
      r="3.75"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="m9.75 18.25-1.25 3.25 3.5-2 3.5 2-1.25-3.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconChat = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5.5 18.75 3.75 21v-5.25c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v3.75c0 .69-.56 1.25-1.25 1.25H5.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.75 14.5V4.75c0-.69-.56-1.25-1.25-1.25H6.5c-.69 0-1.25.56-1.25 1.25v8.25"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.75 6.75h6.5M8.75 10.25h3.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const IconNote = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6.75 4.5c0-.69.56-1.25 1.25-1.25h10.25V17.5c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25V4.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M6.75 7.25H5c-.69 0-1.25.56-1.25 1.25v11c0 .69.56 1.25 1.25 1.25h10.75"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 6.75h5M10 10.25h5M10 13.75h3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const IconCompass = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="7.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="m9.5 14.5 1-3 3-1-1 3-3 1Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const IconLaugh = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="8"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M15.25 12.75a3.25 3.25 0 1 1-6.5 0h6.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 9.25h.01M14.5 9.25h.01"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const IconHeart = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 19s-6.5-3.75-6.5-8.5S9 4 12 7.25C15 4 18.5 4.5 18.5 10.5S12 19 12 19Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconBook = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5.25 5.5c0-1.24.91-2.25 2.03-2.25h10.47v17.5H7.75c-1.12 0-2.03.99-2.03 2.25V5.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 6.75h7.5M7.5 10h5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const keywordOptions = [
  'Adventure',
  'Heartwarming',
  'Laughs',
  'Music',
  'Visuals',
  'Learning',
];

const playlistSeed = [
  {
    id: 'stellar-sleepovers',
    title: 'Stellar Sleepovers',
    tagline: 'Dreamy space adventures perfect for pajama nights.',
    ageRange: '5 – 8 years',
    runtime: '3 films • 4h 15m total',
    tags: ['Adventure', 'Curiosity', 'Soothing'],
    films: [
      {
        title: 'Moonlight Mission',
        blurb: 'A gentle sci-fi tale about a sibling duo learning teamwork on a lunar quest.',
      },
      {
        title: 'Comet Campfire',
        blurb: 'Stories, snacks, and shimmering skies in a calm cosmic campground.',
      },
      {
        title: 'Stardust Sleepover',
        blurb: 'A bedtime-ready short filled with lullaby melodies and floating star critters.',
      },
    ],
    reviews: [
      {
        reviewer: 'Camila R.',
        rating: 5,
        comment: 'Our twins loved the cozy glow and the songs are still stuck in our heads.',
        keywords: ['Heartwarming', 'Music'],
      },
      {
        reviewer: 'Jules P.',
        rating: 4,
        comment: 'Perfect wind-down vibe and a sweet reminder about sharing.',
        keywords: ['Learning', 'Heartwarming'],
      },
      {
        reviewer: 'Sal M.',
        rating: 5,
        comment: 'Spacey visuals without the big scares—exactly what we needed.',
        keywords: ['Visuals', 'Adventure'],
      },
      {
        reviewer: 'Eli B.',
        rating: 4,
        comment: 'The quiet pacing was perfect for our sensory-sensitive kiddo.',
        keywords: ['Adventure', 'Soothing'],
      },
      {
        reviewer: 'Rina S.',
        rating: 5,
        comment: 'We ended the night making constellation snacks—huge hit.',
        keywords: ['Learning', 'Curiosity'],
      },
      {
        reviewer: 'The Delgados',
        rating: 4,
        comment: 'Beautiful score and the stargazing tips were unexpectedly helpful.',
        keywords: ['Music', 'Visuals'],
      },
    ],
  },
  {
    id: 'giggle-gala',
    title: 'Giggle Gala',
    tagline: 'Slapstick shorts and clever capers to spark belly laughs.',
    ageRange: '6 – 10 years',
    runtime: '4 films • 3h 40m total',
    tags: ['Laughs', 'Energy', 'Rainy Day'],
    films: [
      {
        title: 'Popcorn Pranksters',
        blurb: 'Two best friends rescue a cinema night with imaginative mischief.',
      },
      {
        title: 'The Umbrella Parade',
        blurb: 'Colorful umbrella creatures tumble through town with rhythmic giggles.',
      },
      {
        title: 'Whisker Whirl',
        blurb: 'A troupe of circus kittens learns timing the silly way.',
      },
      {
        title: 'Balloon Buddies',
        blurb: 'Short, smart, and delightfully bouncy cartoon skits.',
      },
    ],
    reviews: [
      {
        reviewer: 'Morgan L.',
        rating: 4,
        comment: 'We paused twice because the kids were laughing too hard to hear the punchline.',
        keywords: ['Laughs', 'Adventure'],
      },
      {
        reviewer: 'Priya N.',
        rating: 5,
        comment: 'Even the grandparents chuckled—great for mixed ages.',
        keywords: ['Heartwarming', 'Laughs'],
      },
      {
        reviewer: 'Amir H.',
        rating: 4,
        comment: 'High-energy without feeling chaotic. The mini-games between shorts were a hit.',
        keywords: ['Energy', 'Laughs'],
      },
      {
        reviewer: 'Kendall T.',
        rating: 5,
        comment: 'Zero downtime—our 7- and 10-year-old laughed the whole way through.',
        keywords: ['Laughs', 'Energy'],
      },
      {
        reviewer: 'Uncle Jay',
        rating: 4,
        comment: 'The physical comedy landed for adults too. Balloon Buddies is an instant classic.',
        keywords: ['Heartwarming', 'Laughs'],
      },
      {
        reviewer: 'Mara & Lee',
        rating: 5,
        comment: 'Perfect rainy-day marathon. Loved the dance-off prompt at the end credits.',
        keywords: ['Music', 'Energy'],
      },
    ],
  },
  {
    id: 'kindness-chronicles',
    title: 'Kindness Chronicles',
    tagline: 'Stories that celebrate empathy, big feelings, and brave choices.',
    ageRange: '7 – 12 years',
    runtime: '3 films • 4h 50m total',
    tags: ['Empathy', 'Family Night', 'Conversation'],
    films: [
      {
        title: 'Lanterns in the Library',
        blurb: 'A friendship forms while restoring a community library by lantern light.',
      },
      {
        title: 'Garden of Small Giants',
        blurb: 'Micro-adventures that show how little acts of kindness grow big hearts.',
      },
      {
        title: 'The Bridge Builders',
        blurb: 'An animated journey about listening, apologising, and starting fresh.',
      },
    ],
    reviews: [
      {
        reviewer: 'Jonah F.',
        rating: 5,
        comment: 'Great conversation starters—our 9-year-old opened up about school.',
        keywords: ['Learning', 'Heartwarming'],
      },
      {
        reviewer: 'Steph W.',
        rating: 4,
        comment: 'Beautiful pacing and music. Maybe a tad long for younger kids but worth it.',
        keywords: ['Music', 'Visuals'],
      },
      {
        reviewer: 'Nia K.',
        rating: 5,
        comment: 'We now have a weekly “kindness mission.” The post-film prompts help a lot.',
        keywords: ['Learning', 'Heartwarming'],
      },
      {
        reviewer: 'Amelia O.',
        rating: 4,
        comment: 'A little long, but the conversation cards kept our preteen engaged.',
        keywords: ['Conversation', 'Learning'],
      },
      {
        reviewer: 'Parents of Room 5',
        rating: 5,
        comment: 'Used this for a classroom family night—tears, laughs, everything. Highly recommend.',
        keywords: ['Family Night', 'Heartwarming'],
      },
      {
        reviewer: 'Zhang Family',
        rating: 4,
        comment: 'Loved the multicultural touches and the empathy moments felt authentic.',
        keywords: ['Empathy', 'Visuals'],
      },
    ],
  },
];

const moodFilters = [
  { id: 'all', label: 'Show All', Icon: IconSpark },
  { id: 'Adventure', label: 'Adventure', Icon: IconCompass },
  { id: 'Laughs', label: 'Laughs', Icon: IconLaugh },
  { id: 'Heartwarming', label: 'Cozy', Icon: IconHeart },
  { id: 'Learning', label: 'Learning', Icon: IconBook },
];

function getReviewStats(reviews) {
  if (!reviews.length) {
    return { averageRating: 0, total: 0 };
  }

  const averageRating =
    reviews.reduce((sum, review) => sum + (review.rating || 0), 0) /
    reviews.length;

  return {
    averageRating,
    total: reviews.length,
  };
}

function PlaylistCard({ playlist, stats, draft, onDraftChange, onSubmitReview }) {
  const topReviewCount = 3;
  const topReviews = playlist.reviews.slice(0, topReviewCount);
  const extraReviews = playlist.reviews.slice(topReviewCount);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const remainingCount = extraReviews.length;
  const hasExtraReviews = remainingCount > 0;
  const remainingLabel = remainingCount === 1 ? 'review' : 'reviews';


  return (
    <section className="group rounded-3xl border border-brand-gold/15 bg-gradient-to-br from-brand-ink via-brand-ink to-black/70 p-8 shadow-[0_25px_45px_-35px_rgba(242,229,170,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-glow">
      <header className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-cream/70">
            {playlist.ageRange}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-brand-gold">
            {playlist.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-brand-cream/70">
            {playlist.tagline}
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-2 text-brand-gold">
            <IconClock className="h-4 w-4" />
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
              Runtime
            </p>
          </div>
          <p className="mt-2 text-sm text-brand-cream/80">{playlist.runtime}</p>
        </div>
      </header>

      <div className="mt-6 flex flex-wrap gap-3">
        {playlist.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-brand-gold/20 bg-brand-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand-cream/80"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {playlist.films.map((film) => (
          <article
            key={film.title}
            className="group rounded-2xl border border-brand-gold/10 bg-brand-black/40 p-5 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-brand-gold/30 hover:shadow-lg"
          >
            <div className="mb-4 flex h-40 transform items-center justify-center rounded-xl border border-brand-gold/20 bg-brand-gold/5 text-xs uppercase tracking-[0.3em] text-brand-cream/50 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.04]">
              Image Placeholder
            </div>
            <h3 className="text-lg font-semibold text-brand-gold">
              {film.title}
            </h3>
            <p className="mt-2 text-sm text-brand-cream/70">{film.blurb}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-8 border-t border-brand-gold/10 pt-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex flex-col gap-3 rounded-2xl border border-brand-gold/10 bg-brand-black/50 p-6">
            <div className="flex items-center gap-2 text-brand-gold">
              <IconMedal className="h-5 w-5" />
              <p className="text-xs uppercase tracking-[0.25em]">
                Family Rating
              </p>
            </div>
            <p className="text-3xl font-semibold text-brand-cream">
              {stats.total ? stats.averageRating.toFixed(1) : '—'}
              <span className="text-base font-normal text-brand-cream/70">
                /5
              </span>
            </p>
            <p className="text-sm text-brand-cream/70">
              {stats.total
                ? `${stats.total} famil${stats.total === 1 ? 'y' : 'ies'} added reviews`
                : 'No reviews yet'}
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2 text-brand-gold">
              <IconChat className="h-4 w-4" />
              <p className="text-xs uppercase tracking-[0.35em]">
                Family Reviews
              </p>
            </div>
            <ul className="space-y-4">
              {topReviews.map((review, index) => (
                <li
                  key={`${review.reviewer}-top-${index}`}
                  className="rounded-2xl border border-brand-gold/10 bg-brand-black/40 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-medium text-brand-cream">
                      {review.reviewer}
                    </p>
                    <div className="flex items-center gap-1 text-brand-cream">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <span
                          key={star}
                          className={
                            star < review.rating
                              ? 'text-brand-cream'
                              : 'text-brand-cream/20'
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-brand-cream/80">
                    {review.comment}
                  </p>
                  {review.keywords?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {review.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-brand-gold/15 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-brand-cream/75"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
            {hasExtraReviews && showAllReviews && (
              <ul className="space-y-4">
                {extraReviews.map((review, index) => (
                  <li
                    key={`${review.reviewer}-extra-${index}`}
                    className="rounded-2xl border border-brand-gold/10 bg-brand-black/40 p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-medium text-brand-cream">
                        {review.reviewer}
                      </p>
                      <div className="flex items-center gap-1 text-brand-cream">
                        {Array.from({ length: 5 }).map((_, star) => (
                          <span
                            key={star}
                            className={
                              star < review.rating
                                ? 'text-brand-cream'
                                : 'text-brand-cream/20'
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-brand-cream/80">
                      {review.comment}
                    </p>
                    {review.keywords?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {review.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="rounded-full bg-brand-gold/15 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-brand-cream/75"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
            {hasExtraReviews && (
              <button
                type="button"
                onClick={() => setShowAllReviews((prev) => !prev)}
                className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em] text-brand-gold transition hover:text-brand-cream"
              >
                {showAllReviews
                  ? 'Show fewer reviews'
                  : `Show ${remainingCount} more ${remainingLabel}`}
              </button>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-brand-gold/10 bg-brand-black/50 p-6">
          <div className="flex items-center gap-2 text-brand-gold">
            <IconNote className="h-5 w-5" />
            <h3 className="text-lg font-semibold">
              Share your family&apos;s take
            </h3>
          </div>
          <p className="mt-1 text-sm text-brand-cream/60">
            Add a quick score, highlight what stood out, and help other families
            choose confidently.
          </p>

          <form
            className="mt-6 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              onSubmitReview(playlist.id);
            }}
          >
            <label className="block">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-cream/60">
                Your name
              </span>
              <input
                type="text"
                value={draft.name}
                onChange={(event) =>
                  onDraftChange(playlist.id, {
                    ...draft,
                    name: event.target.value,
                  })
                }
                placeholder="e.g. The Martins"
                className="mt-2 w-full rounded-xl border border-brand-gold/20 bg-transparent px-4 py-2 text-sm text-brand-cream focus:border-brand-gold focus:outline-none focus:ring-0"
                required
              />
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-cream/60">
                Kid-friendly score
              </span>
              <div className="mt-3 flex items-center gap-3">
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={draft.rating}
                  onChange={(event) =>
                    onDraftChange(playlist.id, {
                      ...draft,
                      rating: Number(event.target.value),
                    })
                  }
                  className="w-full accent-brand-gold"
                />
                <span className="w-10 text-right text-sm text-brand-cream">
                  {draft.rating}/5
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-cream/60">
                Quick thoughts
              </span>
              <textarea
                rows="3"
                value={draft.comment}
                onChange={(event) =>
                  onDraftChange(playlist.id, {
                    ...draft,
                    comment: event.target.value,
                  })
                }
                placeholder="What moments did your crew love most?"
                className="mt-2 w-full rounded-xl border border-brand-gold/20 bg-transparent px-4 py-2 text-sm text-brand-cream focus:border-brand-gold focus:outline-none focus:ring-0"
                required
              />
            </label>

            <fieldset>
              <legend className="text-xs uppercase tracking-[0.25em] text-brand-cream/60">
                Pick a few highlights
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {keywordOptions.map((keyword) => {
                  const isSelected = draft.keywords.includes(keyword);
                  return (
                    <button
                      key={keyword}
                      type="button"
                      onClick={() => {
                        onDraftChange(playlist.id, {
                          ...draft,
                          keywords: isSelected
                            ? draft.keywords.filter((item) => item !== keyword)
                            : [...draft.keywords, keyword],
                        });
                      }}
                      className={`rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] transition ${
                        isSelected
                          ? 'border-brand-gold bg-brand-gold/20 text-brand-cream'
                          : 'border-brand-gold/30 text-brand-cream/60 hover:border-brand-gold/50 hover:text-brand-cream'
                      }`}
                    >
                      {keyword}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand-ink transition hover:bg-white"
            >
              Post Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [collections, setCollections] = useState(playlistSeed);
  const [selectedMood, setSelectedMood] = useState('all');
  const [drafts, setDrafts] = useState(() =>
    Object.fromEntries(
      playlistSeed.map((playlist) => [
        playlist.id,
        { name: '', rating: 4, comment: '', keywords: [] },
      ]),
    ),
  );
  const filteredCollections = useMemo(() => {
    if (selectedMood === 'all') {
      return collections;
    }

    return collections.filter((playlist) =>
      playlist.tags.some((tag) =>
        tag.toLowerCase().includes(selectedMood.toLowerCase()),
      ),
    );
  }, [collections, selectedMood]);

  const handleDraftChange = (playlistId, nextDraft) => {
    setDrafts((prev) => ({
      ...prev,
      [playlistId]: nextDraft,
    }));
  };

  const handleSubmitReview = (playlistId) => {
    const draft = drafts[playlistId];
    if (!draft?.name || !draft?.comment || !draft?.rating) {
      return;
    }

    const newReview = {
      reviewer: draft.name.trim(),
      rating: draft.rating,
      comment: draft.comment.trim(),
      keywords: draft.keywords,
    };

    setCollections((previous) =>
      previous.map((playlist) =>
        playlist.id === playlistId
          ? { ...playlist, reviews: [newReview, ...playlist.reviews] }
          : playlist,
      ),
    );

    setDrafts((prev) => ({
      ...prev,
      [playlistId]: { name: '', rating: 4, comment: '', keywords: [] },
    }));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-brand-cream">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,229,170,0.08),_transparent_60%)]" />
        <div className="absolute -left-1/3 top-0 h-full w-[70%] -rotate-12 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTYwIiB2aWV3Qm94PSIwIDAgMjAwIDE2MCI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNjAiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNMTAgMTVoMTgwdjUwSDEwek0xMCA5NWgxODB2NTBIMTB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjQyLDIyOSwxNzAsMC4xMikiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWRhc2hhcnJheT0iOSAxOCIvPgogIDxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNDIsMjI5LDE3MCwwLjEpIiBzdHJva2Utd2lkdGg9IjMiLz4KICA8Y2lyY2xlIGN4PSI4MCIgY3k9IjQwIiByPSI2IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjQyLDIyOSwxNzAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgPGNpcmNsZSBjeD0iMTIwIiBjeT0iNDAiIHI9IjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNDIsMjI5LDE3MCwwLjEpIiBzdHJva2Utd2lkdGg9IjMiLz4KICA8Y2lyY2xlIGN4PSIxNjAiIGN5PSI0MCIgcj0iNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI0MiwyMjksMTcwLDAuMSkiIHN0cm9rZS13aWR0aD0iMyIvPgogIDxjaXJjbGUgY3g9IjQwIiBjeT0iMTIwIiByPSI2IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjQyLDIyOSwxNzAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgPGNpcmNsZSBjeD0iODAiIGN5PSIxMjAiIHI9IjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNDIsMjI5LDE3MCwwLjEpIiBzdHJva2Utd2lkdGg9IjMiLz4KICA8Y2lyY2xlIGN4PSIxMjAiIGN5PSIxMjAiIHI9IjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNDIsMjI5LDE3MCwwLjEpIiBzdHJva2Utd2lkdGg9IjMiLz4KICA8Y2lyY2xlIGN4PSIxNjAiIGN5PSIxMjAiIHI9IjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNDIsMjI5LDE3MCwwLjEpIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+')] bg-repeat opacity-30 blur-[1px]" />
        <div className="absolute -right-1/4 bottom-[-15%] h-[65%] w-[60%] rotate-6 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgMjQwIDE4MCI+CiAgPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSIxODAiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNMjAgMzVoMjAwdjQwSDIwek0yMCAxMTVoMjAwdjQwSDIweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI0MiwyMjksMTcwLDAuMikiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWRhc2hhcnJheT0iMTIgMjAiLz4KICA8cmVjdCB4PSIzMCIgeT0iNDUiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNDIsMjI5LDE3MCwwLjA4KSIvPgogIDxyZWN0IHg9IjEzMCIgeT0iNDUiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNDIsMjI5LDE3MCwwLjA4KSIvPgogIDxyZWN0IHg9IjMwIiB5PSIxMjUiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNDIsMjI5LDE3MCwwLjA4KSIvPgogIDxyZWN0IHg9IjEzMCIgeT0iMTI1IiB3aWR0aD0iODAiIGhlaWdodD0iMjAiIGZpbGw9InJnYmEoMjQyLDIyOSwxNzAsMC4wOCkiLz4KPC9zdmc+')] bg-repeat opacity-25 blur-sm" />
      </div>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-6 pt-8 sm:px-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-brand-cream/70">
              Logo
            </div>
            <span className="text-xs uppercase tracking-[0.4em] text-brand-cream/60">
              CinemaWorld Asia
            </span>
          </div>
        </nav>
        <header className="px-6 pt-12 pb-14 text-center sm:px-10">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-brand-cream/80">
              CinemaWorld Family Picks
            </span>
            <h1 className="text-4xl font-semibold text-brand-gold sm:text-5xl">
              Curated playlists that keep every kid engaged—and every parent at
              ease.
            </h1>
            <p className="text-base text-brand-cream/70">
              Explore ready-to-watch collections crafted for cozy nights, rainy
              afternoons, and everything in between. Each playlist blends the
              CinemaWorld charm with community-powered insights so you can press
              play with confidence.
            </p>
          </div>
        </header>

        <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 sm:px-10">
          <section className="flex flex-col gap-4 rounded-3xl border border-brand-gold/15 bg-brand-black/40 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <IconSpark className="h-8 w-8 text-brand-gold" />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-cream/60">
                  Choose a mood
                </p>
                <h2 className="mt-2 text-xl font-medium text-brand-cream">
                  Filter playlists by the feeling you&apos;re chasing
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {moodFilters.map((filter) => {
                const { Icon } = filter;
                const isActive = selectedMood === filter.id;
                const iconClasses = isActive
                  ? 'text-brand-gold'
                  : 'text-brand-cream/70';
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setSelectedMood(filter.id)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
                      isActive
                        ? 'border-brand-gold bg-brand-gold/20 text-brand-cream'
                        : 'border-brand-gold/30 text-brand-cream/60 hover:border-brand-gold/60 hover:text-brand-cream'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${iconClasses}`} />
                      <span>{filter.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {filteredCollections.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              stats={getReviewStats(playlist.reviews)}
              draft={drafts[playlist.id]}
              onDraftChange={handleDraftChange}
              onSubmitReview={handleSubmitReview}
            />
          ))}

          {!filteredCollections.length && (
            <div className="rounded-3xl border border-brand-gold/15 bg-brand-black/40 p-12 text-center text-brand-cream/70">
              No playlists match that mood just yet—try another filter or add your
              own film picks soon.
            </div>
          )}
        </main>

        <footer className="border-t border-brand-gold/10 bg-black/60 py-10 text-center text-xs uppercase tracking-[0.35em] text-brand-cream/50">
          Powered by CinemaWorld Asia • Crafted for families
        </footer>
      </div>
    </div>
  );
}
