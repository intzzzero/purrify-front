'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/Skeleton';

type ViewMode = 'list' | 'grid';

export default function Feed() {
	const [viewMode, setViewMode] = useState<ViewMode>('list');
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
		// 추가 더미 데이터
		{
			id: 2,
			author: '고양이집사',
			content: '오늘의 냥이',
			imageUrl: '/images/posts/cat2.jpg',
			likes: 38,
			comments: 3,
		},
	]);
	const [isLoading, setIsLoading] = useState(true);

	const ListSkeleton = () => (
		<div className="bg-white rounded-xl shadow-md overflow-hidden">
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
	);

	const GridSkeleton = () => (
		<div className="relative aspect-square">
			<Skeleton className="w-full h-full rounded-lg" />
		</div>
	);

	return (
		<div className="min-h-screen bg-gray-50">
			<main className="max-w-6xl mx-auto py-8 px-4">
				{/* 뷰 모드 토글 */}
				<div className="flex justify-end mb-6">
					<div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
						<button
							onClick={() => setViewMode('list')}
							className={`px-4 py-2 rounded-md transition-colors ${
								viewMode === 'list'
									? 'bg-primary text-white'
									: 'text-gray-600 hover:bg-gray-100'
							}`}
						>
							<span className="text-lg">📝</span>
						</button>
						<button
							onClick={() => setViewMode('grid')}
							className={`px-4 py-2 rounded-md transition-colors ${
								viewMode === 'grid'
									? 'bg-primary text-white'
									: 'text-gray-600 hover:bg-gray-100'
							}`}
						>
							<span className="text-lg">📷</span>
						</button>
					</div>
				</div>

				{viewMode === 'list' ? (
					// 리스트 뷰
					<div className="max-w-2xl mx-auto space-y-6">
						{isLoading ? (
							<>
								{[1, 2, 3].map((num) => (
									<ListSkeleton key={num} />
								))}
							</>
						) : (
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
				) : (
					// 그리드 뷰
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{isLoading ? (
							<>
								{[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
									<GridSkeleton key={num} />
								))}
							</>
						) : (
							posts.map((post) => (
								<div
									key={post.id}
									className="relative aspect-square group cursor-pointer"
								>
									<Image
										src={post.imageUrl}
										alt={post.content}
										fill
										className="object-cover rounded-lg"
										onLoad={() => setIsLoading(false)}
										onError={() => setIsLoading(false)}
									/>
									<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center text-white gap-4">
										<div className="flex items-center gap-1">
											<span>❤️</span>
											<span>{post.likes}</span>
										</div>
										<div className="flex items-center gap-1">
											<span>💬</span>
											<span>{post.comments}</span>
										</div>
									</div>
								</div>
							))
						)}
					</div>
				)}
			</main>
		</div>
	);
}
