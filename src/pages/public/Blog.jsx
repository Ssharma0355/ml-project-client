import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Optimizing Industrial IoT Latency',
    href: '#',
    description:
      'How we reduced round-trip times by 40% using Edge Computing and optimized TCP stacks for high-interference environments.',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    category: { title: 'Engineering', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'The Future of Manufacturing Software',
    href: '#',
    description:
      'Why the next decade of manufacturing belongs to software-defined factories and how open standards are leading the way.',
    date: 'Mar 10, 2024',
    datetime: '2024-03-10',
    category: { title: 'Vision', href: '#' },
    author: {
      name: 'Sarah Chen',
      role: 'VP of Product',
      imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Security Best Practices for PLC',
    href: '#',
    description:
      'A deep dive into securing Programmable Logic Controllers against modern threat vectors without compromising availability.',
    date: 'Feb 12, 2024',
    datetime: '2024-02-12',
    category: { title: 'Security', href: '#' },
    author: {
      name: 'James Wilson',
      role: 'Security Engineer',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

const Blog = () => {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-slate-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-slate-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between bg-white p-6 rounded-2xl shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-slate-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-600 hover:bg-indigo-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-indigo-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-slate-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-slate-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-slate-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;