// Rishabh Goswami
// matriculation number: 1455991
//28 October 2023

// POST /api/user
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log(req.body);
	const result = await prisma.users.create({
		data: {
			name: req.body.name,
			mobile: req.body.mobile,
			image: "https://i.pravatar.cc/300",
		},
	});
	return res.status(201).json({ result });
}
