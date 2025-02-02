'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUpComplete() {
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
					<h2 className="mt-6 text-3xl font-bold text-gray-900">가입 완료!</h2>
					<p className="mt-4 text-gray-600">
						회원가입이 완료되었습니다. 이메일을 확인하여 계정을 인증해주세요.
					</p>
				</div>
				<div className="mt-8 space-y-4">
					<Link
						href="/auth/signin"
						className="w-full py-3 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors block text-center"
					>
						로그인하기
					</Link>
					<Link
						href="/"
						className="w-full py-3 text-primary border border-primary rounded-full hover:bg-gray-50 transition-colors block text-center"
					>
						홈으로 가기
					</Link>
				</div>
			</div>
		</div>
	);
}
