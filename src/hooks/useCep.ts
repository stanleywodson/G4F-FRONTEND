import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "../types/schema"
import { useCallback, useEffect } from "react"
import { AddressProps, FormProps } from '../types/types'
import { useForm } from "react-hook-form"
import { maskCep } from "../functions/masks"
import axios from "axios"

export const useCep = () => {
	const { register, watch, setValue, formState: { errors } } = useForm<FormProps>({
		criteriaMode: 'all',
		mode: 'all',
		reValidateMode: 'onChange',
		resolver: zodResolver(schema),
		defaultValues: {
			address: {
				zipCode: '',
				street: '',
				district: '',
				complement: '',
				city: '',
			}
		}
	})

	const zipCode = watch('address.zipCode')
	
	useEffect(() => {
		setValue('address.zipCode', maskCep(zipCode))
	}, [zipCode, setValue])


	const handleSetData = useCallback((data: AddressProps) => {
		setValue('address.street', data.logradouro)
		setValue('address.district', data.bairro)
		setValue('address.complement', data.complemento)
		setValue('address.city', data.localidade)
	}, [setValue])

	const handleFetchCep = useCallback(async (zipCode: string) => {
		const { data } = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`)
		handleSetData(data)
	}, [handleSetData])


	useEffect(() => {
		if (zipCode.length !== 9) return

		handleFetchCep(zipCode)

	}, [handleFetchCep, zipCode])

	return {
		register,
		errors,
	}

}