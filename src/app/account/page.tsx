import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';
import { signOut } from './action';

export default async function AccountPage() {
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
					<Link href="/">
						<Image
							src="/images/logo.png"
							alt="Purrify 로고"
							width={120}
							height={48}
						/>
					</Link>
					<form action={signOut}>
						<button
							type="submit"
							className="px-4 py-2 text-sm text-primary border border-primary rounded-full hover:bg-primary/10 transition-colors"
						>
							로그아웃
						</button>
					</form>
				</div>

				<div className="bg-white shadow rounded-lg">
					<div className="px-6 py-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">내 계정</h2>

						<div className="space-y-6">
							<div>
								<h3 className="text-lg font-medium text-gray-900 mb-2">
									기본 정보
								</h3>
								<div className="bg-gray-50 rounded-lg p-4 space-y-3">
									<div>
										<span className="text-sm text-gray-500">이메일</span>
										<p className="text-gray-900">{user.email}</p>
									</div>
									<div>
										<span className="text-sm text-gray-500">가입일</span>
										<p className="text-gray-900">
											{new Date(user.created_at).toLocaleDateString('ko-KR')}
										</p>
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-lg font-medium text-gray-900 mb-2">
									계정 관리
								</h3>
								<div className="space-y-3">
									<Link
										href="/account/edit"
										className="block w-full px-4 py-3 text-center text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
									>
										프로필 수정
									</Link>
									<Link
										href="/account/password"
										className="block w-full px-4 py-3 text-center text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
									>
										비밀번호 변경
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
