import cs from 'classnames'
import type { MDXComponents } from 'mdx/types'
import type { ComponentPropsWithoutRef } from 'react'

const heading = 'font-semibold tracking-tight text-slate-900'
const body = 'text-slate-600 text-base leading-relaxed'

const components: MDXComponents = {
    h1: ({ className, ...props }: ComponentPropsWithoutRef<'h1'>) => (
        <h1
            className={cs(heading, 'mt-0 mb-5 text-3xl md:text-4xl', className)}
            {...props}
        />
    ),
    h2: ({ className, ...props }: ComponentPropsWithoutRef<'h2'>) => (
        <h2
            className={cs(
                heading,
                'mb-3 mt-8 border-b border-slate-200 pb-2 text-2xl md:text-3xl first:mt-0',
                className,
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: ComponentPropsWithoutRef<'h3'>) => (
        <h3
            className={cs(heading, 'mb-2 mt-6 text-lg text-slate-800 md:text-xl', className)}
            {...props}
        />
    ),
    h4: ({ className, ...props }: ComponentPropsWithoutRef<'h4'>) => (
        <h4 className={cs(heading, 'mb-2 mt-5 text-base md:text-lg', className)} {...props} />
    ),
    p: ({ className, ...props }: ComponentPropsWithoutRef<'p'>) => (
        <p className={cs(body, 'mb-4 mt-0 last:mb-0', className)} {...props} />
    ),
    ul: ({ className, ...props }: ComponentPropsWithoutRef<'ul'>) => (
        <ul
            className={cs(
                body,
                // Preflight снимает list-style — явно включаем маркеры снаружи текста
                'my-4 list-outside list-disc pl-6 marker:text-accent',
                // MDX часто оборачивает пункт в <p> — убираем «простыню» отступов
                '[&>li>p]:mb-0 [&>li>p]:mt-0',
                className,
            )}
            {...props}
        />
    ),
    ol: ({ className, ...props }: ComponentPropsWithoutRef<'ol'>) => (
        <ol
            className={cs(
                body,
                'my-4 list-outside list-decimal pl-6 marker:font-medium marker:text-slate-800',
                '[&>li>p]:mb-0 [&>li>p]:mt-0',
                className,
            )}
            {...props}
        />
    ),
    li: ({ className, ...props }: ComponentPropsWithoutRef<'li'>) => (
        <li
            className={cs(
                'my-1 pl-1 leading-snug first:mt-0 last:mb-0 [&_p]:mb-0 [&_p]:mt-0',
                className,
            )}
            {...props}
        />
    ),
    strong: ({ className, ...props }: ComponentPropsWithoutRef<'strong'>) => (
        <strong className={cs('font-semibold text-slate-900', className)} {...props} />
    ),
    b: ({ className, ...props }: ComponentPropsWithoutRef<'b'>) => (
        <b className={cs('font-semibold text-accent', className)} {...props} />
    ),
    em: ({ className, ...props }: ComponentPropsWithoutRef<'em'>) => (
        <em className={cs('italic text-slate-700', className)} {...props} />
    ),
    a: ({ className, ...props }: ComponentPropsWithoutRef<'a'>) => (
        <a
            className={cs(
                'font-medium text-accent underline decoration-accent/40 underline-offset-2 transition hover:text-accent-hover hover:decoration-accent',
                className,
            )}
            {...props}
        />
    ),
    blockquote: ({ className, ...props }: ComponentPropsWithoutRef<'blockquote'>) => (
        <blockquote
            className={cs(
                body,
                'my-6 border-l-4 border-accent/60 bg-slate-50/90 py-3 pl-4 pr-3 italic text-slate-700',
                className,
            )}
            {...props}
        />
    ),
    hr: ({ className, ...props }: ComponentPropsWithoutRef<'hr'>) => (
        <hr className={cs('my-8 border-t border-slate-200', className)} {...props} />
    ),
    code: ({ className, ...props }: ComponentPropsWithoutRef<'code'>) => (
        <code
            className={cs(
                'rounded bg-slate-100 px-1 py-0.5 font-mono text-[0.9em] text-slate-800',
                className,
            )}
            {...props}
        />
    ),
    pre: ({ className, ...props }: ComponentPropsWithoutRef<'pre'>) => (
        <pre
            className={cs(
                'my-5 overflow-x-auto rounded-lg border border-slate-200 bg-slate-950 p-4 text-sm text-slate-100',
                className,
            )}
            {...props}
        />
    ),
}

export function useMDXComponents(): MDXComponents {
    return components
}
