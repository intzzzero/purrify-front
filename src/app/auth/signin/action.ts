'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export async function signin(formData: FormData) {
	const supabase = await createClient();

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	console.log(data);
	console.log((await supabase.auth.signInWithPassword(data)).error);

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		const searchParams = new URLSearchParams();
		if (error.message) {
			searchParams.set('message', error.message);
		}
		if (error.status === 400 && error.message.includes('Email not confirmed')) {
			searchParams.set('code', 'email_not_confirmed');
		}
		redirect('/error?' + searchParams.toString());
	}

	revalidatePath('/', 'layout');
	redirect('/account');
}
