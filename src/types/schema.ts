import { z } from "zod"

export const schema = z.object({
	address: z.object({
		zipCode: z.string()
			.min(9, 'Preencha o CEP de forma correta')
			.max(9, 'Preencha o CEP de forma correta'),
		street: z.string().min(1, 'Preencha a Rua de forma correta'),
		district: z.string().min(1, 'Preencha o Bairro de forma correta'),
		complement: z.string(),
		city: z.string().min(1, 'Preencha a Cidade de forma correta'),
	})
})
	.transform(fields => ({
		address: {
			zipCode: fields.address.zipCode,
			street: fields.address.street,
			district: fields.address.district,
			complement: fields.address.complement,
			city: fields.address.city,
		}
	}))