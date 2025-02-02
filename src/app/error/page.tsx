'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ErrorPage() {
	return (
		<div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
			<div className="max-w-md w-full space-y-8">
				<div className="text-center">
					<Link href="/">
						<Image
							src="/images/logo.png"
							alt="Purrify 로고"
							width={150}
							height={60}
							className="mx-auto"
						/>
					</Link>
					<h2 className="mt-6 text-3xl font-bold text-gray-900">
						오류가 발생했습니다
					</h2>
					<p className="mt-4 text-gray-600">
						죄송합니다. 요청하신 작업을 처리하는 중에 문제가 발생했습니다.
						<br />
						잠시 후 다시 시도해 주세요.
					</p>
				</div>
				<div className="mt-8 space-y-4">
					<Link
						href="/"
						className="w-full py-3 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors block text-center"
					>
						홈으로 돌아가기
					</Link>
					<button
						onClick={() => window.history.back()}
						className="w-full py-3 text-primary border border-primary rounded-full hover:bg-gray-50 transition-colors"
					>
						이전 페이지로 돌아가기
					</button>
				</div>
			</div>
		</div>
	);
}
