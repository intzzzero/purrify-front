'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export async function updateProfile(formData: FormData) {
	const supabase = await createClient();

	const {
		data: { user },
		error: userError,
	} = await supabase.auth.getUser();

	if (userError || !user) {
		redirect('/auth/signin');
	}

	const updates = {
		nickname: formData.get('nickname'),
		bio: formData.get('bio'),
		updated_at: new Date().toISOString(),
	};

	const { error } = await supabase.auth.updateUser({
		data: updates,
	});

	if (error) {
		const searchParams = new URLSearchParams();
		searchParams.set('message', error.message);
		redirect('/error?' + searchParams.toString());
	}

	revalidatePath('/account');
	redirect('/account');
}
