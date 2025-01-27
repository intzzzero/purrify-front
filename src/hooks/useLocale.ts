import { useState, useEffect } from 'react';

type Locale = 'ko' | 'en';

export function useLocale(): Locale {
	const [locale, setLocale] = useState<Locale>('en');

	useEffect(() => {
		// 타임존 확인
		const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		const isKoreaTimeZone = timeZone === 'Asia/Seoul';

		// 브라우저 언어 확인
		const browserLanguage = navigator.language.toLowerCase();
		const isKoreanLanguage = browserLanguage.startsWith('ko');

		// 한국 시간대이거나 브라우저 언어가 한국어인 경우
		if (isKoreaTimeZone || isKoreanLanguage) {
			setLocale('ko');
		}
	}, []);

	return locale;
}
