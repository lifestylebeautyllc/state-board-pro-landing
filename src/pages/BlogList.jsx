import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { Calendar, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function BlogList() {
  return (
    <div className="w-full max-w-full box-border bg-brand-periwinkle/10 min-h-[calc(100vh-80px)] py-14 sm:py-20 overflow-x-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 box-border">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
            Washington State Exam Hub
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-violet tracking-tight mb-4">
            Washington State Board Insights
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Essential updates, Prov testing center guides, candidate bulletin breakdowns, and state board prep strategies for Washington beauty professionals.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="w-full max-w-full box-border bg-white rounded-2xl p-6 sm:p-8 shadow-subtle hover:shadow-premium transition-all duration-300 border border-slate-100 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{post.date}</span>
                </div>

                <h2 className="text-lg sm:text-2xl font-bold text-brand-violet group-hover:text-brand-violet/85 transition-colors mb-3 leading-snug">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/blog/${post.slug}`}
                  className="min-h-[44px] text-xs sm:text-sm font-bold text-brand-violet hover:text-brand-gold transition-colors inline-flex items-center gap-1.5 group/link py-2"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <span className="text-xs text-brand-violet/60 font-medium flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> 3 min read
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
