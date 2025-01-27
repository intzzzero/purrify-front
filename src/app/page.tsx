'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { texts } from '@/constants/locales';
import { useLocale } from '@/hooks/useLocale';

export default function Home() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = [1, 2, 3, 4, 5, 6];
	const locale = useLocale();
	const t = texts[locale];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 3000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="min-h-screen bg-white">
			{/* 네비게이션 바 */}
			<nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
				<div className="max-w-6xl mx-auto flex justify-between items-center">
					<div className="flex items-center gap-2">
						<Image
							src="/images/logo.png"
							alt="Purrify 로고"
							width={120}
							height={50}
							className="rounded-lg object-contain bg-white"
						/>
					</div>
					<div className="flex gap-4">
						<Link
							href="/auth/signin"
							className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90"
						>
							{t.auth.login}
						</Link>
						<Link
							href="/auth/signup"
							className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/5"
						>
							{t.auth.signup}
						</Link>
					</div>
				</div>
			</nav>

			{/* 메인 컨텐츠 */}
			<main className="pt-20 px-4">
				{/* 히어로 섹션 */}
				<section className="max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center gap-8">
					<div className="flex-1 space-y-6">
						<div className="space-y-4 text-center">
							<h1 className="text-4xl font-bold text-gray-900">
								{t.hero.title}
							</h1>
							<p className="text-xl text-gray-600">
								{t.hero.description.map((line, index) => (
									<span key={index}>
										{line}
										{index < t.hero.description.length - 1 && <br />}
									</span>
								))}
							</p>
							<div className="flex justify-center mt-8">
								<Link
									href="/auth/signin"
									className="px-6 py-3 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
								>
									{t.hero.cta}
								</Link>
							</div>
						</div>
					</div>
					<div className="flex-1">
						<div className="relative w-full h-[500px] rounded-2xl shadow-lg overflow-hidden">
							{slides.map((num, index) => (
								<div
									key={num}
									className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
										currentSlide === index ? 'opacity-100' : 'opacity-0'
									}`}
								>
									<Image
										src={`/images/main/cat_${num}.jpg`}
										alt={`고양이 ${num}`}
										fill
										className="object-cover"
										priority={index === 0}
									/>
								</div>
							))}
							<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
								{slides.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentSlide(index)}
										className={`w-2 h-2 rounded-full transition-all ${
											currentSlide === index
												? 'bg-white w-4'
												: 'bg-white/50 hover:bg-white/75'
										}`}
										aria-label={`슬라이드 ${index + 1}로 이동`}
									/>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* 기능 소개 섹션 */}
				<section className="max-w-6xl mx-auto py-16">
					<h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
						{t.features.title}
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{t.features.items.map((feature, index) => (
							<div
								key={index}
								className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
							>
								<div className="text-primary text-4xl mb-4">
									{feature.emoji}
								</div>
								<h4 className="text-xl font-bold mb-2 text-gray-800">
									{feature.title}
								</h4>
								<p className="text-gray-700 leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</section>
			</main>

			{/* 푸터 */}
			<footer className="bg-white py-8">
				<div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
					<p>ⓒ 2025. Purrify. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
