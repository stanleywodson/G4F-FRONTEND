import { z } from "zod"
import { schema } from "./schema"

export type FormProps = z.infer<typeof schema>

export type AddressProps = {
	logradouro: string
	bairro: string
	complemento: string
	localidade: string
}
