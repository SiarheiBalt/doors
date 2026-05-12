import type { ComponentType } from 'react'

type PortfolioCaseParams = {
    params: {
        case: string
    }
}

type PortfolioCaseModule = {
    default: ComponentType
    metadata?: {
        title?: string
        [key: string]: unknown
    }
}

export const dynamicParams = false

export default async function PortfolioCasePage({ params }: PortfolioCaseParams) {
    const {case: caseSlug} = await params
    const caseModule = await (await import(`@/content/portfolio/${caseSlug}.md`)) as PortfolioCaseModule
    const CaseContent = caseModule.default
    const caseTitle = caseModule.metadata?.title ?? 'Portfolio Case'

    return (
        <div className="min-h-screen">
            <div className="pt-28 pb-14 md:pt-32 md:pb-16">
                <div className="home-container">
                    <div className="mt-6 max-w-3xl">
                        <CaseContent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    return [{ case: 'case-1' }]
}