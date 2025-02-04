import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';
import { updateProfile } from './action';

export default async function EditProfilePage() {
	const supabase = await createClient();

	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();

	if (error || !user) {
		redirect('/auth/signin');
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
							프로필 수정
						</h2>

						<form action={updateProfile} className="space-y-6">
							<div className="space-y-4">
								<div className="flex flex-col items-center space-y-4">
									<div className="relative">
										<div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
											<Image
												src={
													user.user_metadata.avatar_url ||
													'/images/default-avatar.png'
												}
												alt="프로필 이미지"
												width={128}
												height={128}
												className="object-cover"
											/>
										</div>
										<button
											type="button"
											className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
										>
											<svg
												className="w-5 h-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										</button>
									</div>
									<p className="text-sm text-gray-500">
										프로필 이미지 변경 (준비중)
									</p>
								</div>

								<div>
									<label
										htmlFor="nickname"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										닉네임
									</label>
									<input
										type="text"
										id="nickname"
										name="nickname"
										defaultValue={user.user_metadata.nickname || ''}
										required
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-900 placeholder:text-gray-400"
										placeholder="닉네임을 입력하세요"
									/>
								</div>

								<div>
									<label
										htmlFor="bio"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										자기소개
									</label>
									<textarea
										id="bio"
										name="bio"
										rows={3}
										defaultValue={user.user_metadata.bio || ''}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-900 placeholder:text-gray-400"
										placeholder="자기소개를 입력하세요"
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
