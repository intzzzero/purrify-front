'use client';
import Image from 'next/image';
import Link from 'next/link';
import { signup } from './action';

export default function SignUp() {
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
					<h2 className="mt-6 text-3xl font-bold text-gray-900">회원가입</h2>
				</div>
				<form className="mt-8 space-y-6" action={signup}>
					<div className="space-y-4">
						<div>
							<label
								htmlFor="email"
								className="text-sm font-medium text-gray-700"
							>
								이메일
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-900 placeholder:text-gray-400"
								placeholder="이메일을 입력하세요"
							/>
						</div>
						<div>
							<label
								htmlFor="nickname"
								className="text-sm font-medium text-gray-700"
							>
								닉네임
							</label>
							<input
								id="nickname"
								name="nickname"
								type="text"
								required
								className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-900 placeholder:text-gray-400"
								placeholder="닉네임을 입력하세요"
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="text-sm font-medium text-gray-700"
							>
								비밀번호
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-900 placeholder:text-gray-400"
								placeholder="비밀번호를 입력하세요"
							/>
						</div>
						<div>
							<label
								htmlFor="passwordConfirm"
								className="text-sm font-medium text-gray-700"
							>
								비밀번호 확인
							</label>
							<input
								id="passwordConfirm"
								type="password"
								required
								className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-900 placeholder:text-gray-400"
								placeholder="비밀번호를 다시 입력하세요"
							/>
						</div>
					</div>
					<button
						type="submit"
						className="w-full py-3 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
					>
						가입하기
					</button>
				</form>
				<div className="text-center">
					<p className="text-sm text-gray-600">
						이미 계정이 있으신가요?{' '}
						<Link
							href="/auth/signin"
							className="text-primary hover:text-primary/90"
						>
							로그인하기
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
