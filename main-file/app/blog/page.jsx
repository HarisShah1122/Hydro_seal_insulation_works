import BlogGrid from "@/components/pages/blogs/blog";

export const metadata = {
    title: "Blog - Insulation & Waterproofing Insights | Hydro Seal Insulation Works",
    description: "Read our blog for insights, tips, and news about insulation, waterproofing, thermal insulation, HVAC, and specialized coatings in Al Ain, Abu Dhabi, UAE.",
    keywords: ['insulation blog', 'waterproofing tips', 'insulation news', 'HVAC insights'],
    openGraph: {
        title: "Blog - Hydro Seal Insulation Works",
        description: "Read our blog for insights, tips, and news about insulation and waterproofing.",
        url: "https://hydrosealinsulation.ae/blog",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Blog - Hydro Seal Insulation Works',
            },
        ],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae/blog',
    },
};

const Blog = () => {
    return (
        <>
            <BlogGrid />
        </>
    );
};

export default Blog;