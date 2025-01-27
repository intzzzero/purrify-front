'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/Skeleton';

export default function Profile() {
	const [userInfo, setUserInfo] = useState({
		nickname: '냥이집사',
		bio: '고양이를 사랑하는 집사입니다',
		posts: 42,
		followers: 120,
		following: 85,
	});
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className="min-h-screen bg-gray-50">
			<main className="max-w-4xl mx-auto py-8 px-4">
				<div className="bg-white rounded-xl shadow-md p-6">
					<div className="flex flex-col md:flex-row items-center gap-8">
						{isLoading ? (
							<>
								<Skeleton className="w-32 h-32 rounded-full" />
								<div className="flex-1 space-y-4">
									<Skeleton className="h-8 w-48" />
									<Skeleton className="h-4 w-full" />
									<div className="flex gap-8">
										{[1, 2, 3].map((num) => (
											<div key={num} className="text-center space-y-1">
												<Skeleton className="h-6 w-12 mx-auto" />
												<Skeleton className="h-4 w-16" />
											</div>
										))}
									</div>
								</div>
							</>
						) : (
							<>
								<div className="relative w-32 h-32">
									<Image
										src="/images/profile/avatar.jpg"
										alt="프로필 이미지"
										fill
										className="rounded-full object-cover"
										onLoad={() => setIsLoading(false)}
										onError={() => setIsLoading(false)}
									/>
								</div>
								<div className="flex-1">
									<h1 className="text-2xl font-bold mb-2">
										{userInfo.nickname}
									</h1>
									<p className="text-gray-600 mb-4">{userInfo.bio}</p>
									<div className="flex gap-8">
										<div className="text-center">
											<div className="font-bold">{userInfo.posts}</div>
											<div className="text-gray-600">게시물</div>
										</div>
										<div className="text-center">
											<div className="font-bold">{userInfo.followers}</div>
											<div className="text-gray-600">팔로워</div>
										</div>
										<div className="text-center">
											<div className="font-bold">{userInfo.following}</div>
											<div className="text-gray-600">팔로잉</div>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				</div>

				<div className="mt-8 grid grid-cols-3 gap-4">
					{isLoading
						? // 스켈레톤 그리드
						  [1, 2, 3, 4, 5, 6].map((num) => (
								<Skeleton key={num} className="aspect-square rounded-lg" />
						  ))
						: // 실제 이미지 그리드
						  [1, 2, 3, 4, 5, 6].map((num) => (
								<div key={num} className="aspect-square relative">
									<Image
										src={`/images/posts/post${num}.jpg`}
										alt={`게시물 ${num}`}
										fill
										className="object-cover rounded-lg"
										onLoad={() => setIsLoading(false)}
										onError={() => setIsLoading(false)}
									/>
								</div>
						  ))}
				</div>
			</main>
		</div>
	);
}
