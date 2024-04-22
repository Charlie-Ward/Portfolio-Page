import { BlogPosts } from "../components/posts";

export const metadat = {
    title: 'Blog',
    description: 'Read My Blog.',
}

export default function Page() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="container">
                <section>
                    <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
                    <BlogPosts />
                </section>
            </div>
        </main>
    )
}