import Projects from "@/src/components/HomePage/Projects";

export default function PortfolioPage() {
    return (
        <div className="home-section bg-surface">
            <Projects hideTitle={true} />
        </div>
    )
}