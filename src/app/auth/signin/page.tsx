'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signin } from './action';

export default function SignIn() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		signin(formData);
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
					<h2 className="mt-6 text-3xl font-bold text-gray-900">로그인</h2>
				</div>
				<form className="mt-8 space-y-6" action={signin}>
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
								className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
								placeholder="이메일을 입력하세요"
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
								className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
								placeholder="비밀번호를 입력하세요"
							/>
						</div>
					</div>
					<button
						type="submit"
						className="w-full py-3 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
					>
						로그인
					</button>
				</form>
				<div className="text-center">
					<p className="text-sm text-gray-600">
						계정이 없으신가요?{' '}
						<Link
							href="/auth/signup"
							className="text-primary hover:text-primary/90"
						>
							회원가입하기
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
