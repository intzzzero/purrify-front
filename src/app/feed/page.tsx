'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/Skeleton';

export default function Feed() {
	const [posts, setPosts] = useState([
		// 더미 데이터
		{
			id: 1,
			author: '냥이집사',
			content: '우리 고양이의 일상',
			imageUrl: '/images/posts/cat1.jpg',
			likes: 42,
			comments: 5,
		},
		// 추가 포스트...
	]);
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className="min-h-screen bg-gray-50">
			<main className="max-w-2xl mx-auto py-8 px-4">
				<div className="space-y-6">
					{isLoading ? (
						// 스켈레톤 UI
						<>
							{[1, 2, 3].map((num) => (
								<div
									key={num}
									className="bg-white rounded-xl shadow-md overflow-hidden"
								>
									<div className="p-4">
										<div className="flex items-center gap-2">
											<Skeleton className="w-10 h-10 rounded-full" />
											<Skeleton className="h-4 w-24" />
										</div>
									</div>
									<Skeleton className="w-full h-96" />
									<div className="p-4">
										<div className="flex gap-4 mb-2">
											<Skeleton className="h-4 w-16" />
											<Skeleton className="h-4 w-16" />
										</div>
										<Skeleton className="h-4 w-3/4" />
									</div>
								</div>
							))}
						</>
					) : (
						// 실제 포스트
						posts.map((post) => (
							<div
								key={post.id}
								className="bg-white rounded-xl shadow-md overflow-hidden"
							>
								<div className="p-4">
									<div className="flex items-center">
										<div className="font-medium">{post.author}</div>
									</div>
								</div>
								<div className="relative h-96">
									<Image
										src={post.imageUrl}
										alt="포스트 이미지"
										fill
										className="object-cover"
										onLoad={() => setIsLoading(false)}
										onError={() => setIsLoading(false)}
									/>
								</div>
								<div className="p-4">
									<div className="flex gap-4 mb-2">
										<button className="text-gray-700 hover:text-primary">
											좋아요 {post.likes}
										</button>
										<button className="text-gray-700 hover:text-primary">
											댓글 {post.comments}
										</button>
									</div>
									<p className="text-gray-800">{post.content}</p>
								</div>
							</div>
						))
					)}
				</div>
			</main>
		</div>
	);
}
