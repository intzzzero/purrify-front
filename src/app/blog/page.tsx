import Link from 'next/link';

export default function BlogPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4">
			<h1 className="text-4xl font-bold">Hello World</h1>
			<Link
				href="/blog/intro"
				className="text-blue-500 hover:text-blue-700 underline"
			>
				Intro 페이지로 이동
			</Link>
		</div>
	);
}
