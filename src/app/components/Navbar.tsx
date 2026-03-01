"use client";

import { useState } from "react";

const navLinks = [
	{ label: "Home", href: "#home" },
	{ label: "How It Works", href: "#how-it-works" },
	{ label: "Services", href: "#services" },
	{ label: "Why Us", href: "#why-us" },
	{ label: "Testimonials", href: "#testimonials" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<nav className='fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm'>
			<div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
				{/* Logo */}
				<a href='#home' className='flex items-center gap-2'>
					<img
						src='/logo.PNG'
						alt='Pickup Beta Logistics'
						className='h-9 w-auto'
					/>
					{/* <span className="text-2xl font-bold text-primary-700">
            Pickup<span className="text-primary-500">Beta</span>
          </span> */}
				</a>

				{/* Desktop links */}
				<ul className='hidden md:flex items-center gap-8'>
					{navLinks.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								className='text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors'
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>

				{/* CTA */}
				<a
					href='mailto:hello@pickupbetalogistics.com'
					className='hidden md:inline-flex items-center px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-full hover:bg-primary-700 transition-colors'
				>
					Get In Touch
				</a>

				{/* Mobile menu button */}
				<button
					className='md:hidden flex flex-col gap-1.5 p-2'
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label='Toggle menu'
				>
					<span
						className={`block h-0.5 w-6 bg-gray-700 transition-transform ${
							mobileOpen ? "rotate-45 translate-y-2" : ""
						}`}
					/>
					<span
						className={`block h-0.5 w-6 bg-gray-700 transition-opacity ${
							mobileOpen ? "opacity-0" : ""
						}`}
					/>
					<span
						className={`block h-0.5 w-6 bg-gray-700 transition-transform ${
							mobileOpen ? "-rotate-45 -translate-y-2" : ""
						}`}
					/>
				</button>
			</div>

			{/* Mobile menu */}
			{mobileOpen && (
				<div className='md:hidden bg-white border-t px-6 pb-6'>
					<ul className='flex flex-col gap-4 pt-4'>
						{navLinks.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									onClick={() => setMobileOpen(false)}
									className='text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors'
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
					<a
						href='mailto:hello@pickupbetalogistics.com'
						className='mt-4 inline-flex items-center px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-full hover:bg-primary-700 transition-colors'
					>
						Get In Touch
					</a>
				</div>
			)}
		</nav>
	);
}
