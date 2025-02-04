'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function updatePassword(formData: FormData) {
	const supabase = await createClient();

	const password = formData.get('password') as string;
	const newPassword = formData.get('newPassword') as string;
	const confirmPassword = formData.get('confirmPassword') as string;

	// 새 비밀번호 확인
	if (newPassword !== confirmPassword) {
		return {
			error: '새 비밀번호가 일치하지 않습니다.',
		};
	}

	const user = (await supabase.auth.getUser()).data.user;
	if (!user?.email) {
		return { error: '사용자 이메일을 찾을 수 없습니다.' };
	}

	// 현재 비밀번호 확인
	const { error: signInError } = await supabase.auth.signInWithPassword({
		email: user.email,
		password,
	});

	if (signInError) {
		return {
			error: '현재 비밀번호가 올바르지 않습니다.',
		};
	}

	// 새 비밀번호로 업데이트
	const { error: updateError } = await supabase.auth.updateUser({
		password: newPassword,
	});

	if (updateError) {
		return {
			error: '비밀번호 변경 중 오류가 발생했습니다.',
		};
	}

	revalidatePath('/account/password');
	redirect('/account');
}
