'use client';

import { useState } from 'react';
import { updatePassword } from './action';
import Link from 'next/link';

export default function PasswordPage() {
	const [error, setError] = useState<string>('');
	const [success, setSuccess] = useState(false);

	async function handleSubmit(formData: FormData) {
		setError('');
		setSuccess(false);
		const result = await updatePassword(formData);
		if (result?.error) {
			setError(result.error);
		}
	}

	return (
		<div className="min-h-screen bg-white">
			<div className="max-w-4xl mx-auto px-4 py-8">
				<div className="flex items-center justify-between mb-8">
					<Link href="/account">
						<div className="flex items-center text-gray-900">
							<svg
								className="w-6 h-6 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
							<span>돌아가기</span>
						</div>
					</Link>
				</div>

				<div className="bg-white shadow rounded-lg">
					<div className="px-6 py-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							비밀번호 변경
						</h2>

						<form action={handleSubmit} className="space-y-6">
							{error && (
								<div className="bg-red-50 text-red-500 p-4 rounded-lg">
									{error}
								</div>
							)}

							<div className="space-y-4">
								<div>
									<label
										htmlFor="password"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										현재 비밀번호
									</label>
									<input
										type="password"
										id="password"
										name="password"
										required
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-900"
									/>
								</div>

								<div>
									<label
										htmlFor="newPassword"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										새 비밀번호
									</label>
									<input
										type="password"
										id="newPassword"
										name="newPassword"
										required
										minLength={6}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-900"
									/>
								</div>

								<div>
									<label
										htmlFor="confirmPassword"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										새 비밀번호 확인
									</label>
									<input
										type="password"
										id="confirmPassword"
										name="confirmPassword"
										required
										minLength={6}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-900"
									/>
								</div>
							</div>

							<div className="flex justify-end space-x-4">
								<Link
									href="/account"
									className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
								>
									취소
								</Link>
								<button
									type="submit"
									className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
								>
									저장하기
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
