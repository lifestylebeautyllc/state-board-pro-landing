import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';
import { Calendar, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-20 px-4 bg-brand-periwinkle/10">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center shadow-subtle border border-slate-100">
          <h2 className="text-2xl font-bold text-brand-violet mb-3">
            Article Not Found
          </h2>
          <p className="text-slate-600 mb-6 text-sm">
            We couldn't find the blog post you're looking for. It might have been moved or updated.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gold text-brand-violet font-bold text-sm hover:brightness-105 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-[calc(100vh-80px)] bg-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-violet/80 hover:text-brand-violet transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Washington State Board Insights</span>
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-10 pb-8 border-b border-slate-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
            Official Prov & DOL Guide
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-violet tracking-tight mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
            <Calendar className="w-4 h-4 text-brand-gold" />
            <span>Published on {post.date}</span>
          </div>
        </header>

        {/* Markdown Content */}
        <div className="prose prose-lg prose-violet max-w-none prose-headings:text-brand-violet prose-headings:font-bold prose-a:text-brand-gold hover:prose-a:text-brand-violet transition-colors leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Post Footer Box */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="rounded-2xl bg-brand-periwinkle/15 border border-brand-periwinkle/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-brand-violet mb-1">
                Preparing for your Washington practical exam?
              </h3>
              <p className="text-sm text-slate-700">
                Practice with real-time proctor audio, simulated timers, and kit checkers built specifically for Washington State.
              </p>
            </div>
            <a
              href="https://www.lifestyleexamedge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-5 py-3 rounded-xl bg-brand-gold text-brand-violet font-extrabold text-sm hover:brightness-105 transition-all shadow-sm"
            >
              Explore Study Suite
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
