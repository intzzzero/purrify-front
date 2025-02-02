'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function ErrorPage() {
	const searchParams = useSearchParams();
	const errorCode = searchParams.get('code');
	const errorMessage = searchParams.get('message');

	const getErrorMessage = () => {
		switch (errorCode) {
			case 'email_not_confirmed':
				return '이메일 인증이 필요합니다. 이메일을 확인해주세요.';
			default:
				return (
					errorMessage || '요청하신 작업을 처리하는 중에 문제가 발생했습니다.'
				);
		}
	};

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
						{getErrorMessage()}
						<br />
						{errorCode === 'email_not_confirmed'
							? '이메일 인증 후 다시 로그인해 주세요.'
							: '잠시 후 다시 시도해 주세요.'}
					</p>
				</div>
				<div className="mt-8 space-y-4">
					{errorCode === 'email_not_confirmed' ? (
						<Link
							href="/auth/signin"
							className="w-full py-3 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors block text-center"
						>
							로그인 페이지로 이동
						</Link>
					) : (
						<Link
							href="/"
							className="w-full py-3 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors block text-center"
						>
							홈으로 돌아가기
						</Link>
					)}
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
