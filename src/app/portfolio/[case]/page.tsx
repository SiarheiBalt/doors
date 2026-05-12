export default function PortfolioCasePage() {
    return (
        <div className="min-h-screen">
            <div className="pt-28 pb-14 md:pt-32 md:pb-16">
                <div className="home-container">
                    <h1 className="home-section-heading text-slate-900 text-left">Portfolio Case</h1>
                </div>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    return [
        { case: 'case-1' },
    ]
}

export async function generateStaticProps(params: { case: string }) {

    return {
        props: {
            params,
        },
    }
}