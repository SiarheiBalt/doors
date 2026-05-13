import type { ComponentType } from 'react'
import CaseCarousel from './CaseCarousel'
import { Shop } from '../../../content/contacts'

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

export const casesDataInformation: Record<string, { title: string; subtitle: string; imageCount: number; shop: Shop; mainImage: string }> = {
    'case-1': {
        title: 'Дом в Коробчицах',
        subtitle: 'Реализация проекта в современном минималистичном стиле',
        imageCount: 9,
        shop: Shop.PREMIUM,
        mainImage: '/images/portfolio/case-1/main-image.webp',
    },
}

export default async function PortfolioCasePage({ params }: PortfolioCaseParams) {
    const {case: caseSlug} = await params
    const caseModule = await (await import(`@/content/portfolio/${caseSlug}.md`)) as PortfolioCaseModule
    const CaseContent = caseModule.default
    const caseInformation = casesDataInformation[caseSlug];

    return (
        <div className="min-h-screen">
            <div className="pt-28 pb-14 md:pt-32 md:pb-16">
                <div className="home-container">
                    <h1 className="home-section-heading text-slate-900 text-left">{caseInformation.title}</h1>
                    <div className="mt-14">
                        <CaseCarousel caseSlug={caseSlug} imageCount={caseInformation.imageCount} />
                    </div>
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