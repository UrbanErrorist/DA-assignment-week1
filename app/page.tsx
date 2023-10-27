import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Table from "@/components/table";
import TablePlaceholder from "@/components/table-placeholder";
import TableEdit from "@/components/table-edit";
import React from "react";

export default function Home() {
	return (
		<main className="relative flex min-h-screen flex-col items-center justify-center">
			<h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
				Distributed Applications
			</h1>
			<Suspense fallback={<TablePlaceholder />}>
				<Table />
			</Suspense>

			<div className="p-2"></div>

			<TableEdit />

			<p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
				{" "}
				{"Rishabh Goswami  (1455991)"}. The Application is built using{" "}
				<Link
					href="https://vercel.com/postgres"
					className="font-medium underline underline-offset-4 hover:text-black transition-colors"
				>
					{"Postgres "}
				</Link>
				<Link
					href="https://prisma.io"
					className="font-medium underline underline-offset-4 hover:text-black transition-colors"
				>
					Prisma
				</Link>{" "}
				<Link
					href="https://nextjs.org/docs"
					className="font-medium underline underline-offset-4 hover:text-black transition-colors"
				>
					Next.js
				</Link>
				.
			</p>
		</main>
	);
}
