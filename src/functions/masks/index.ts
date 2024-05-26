export const maskCpf = (cpf: string) => {
	return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

export const maskCnpj = (cnpj: string) => {
	return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
}

export const maskPhone = (phone: string) => {
	return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
}

export const maskCep = (cep: string) => {
	if (cep.length === 10) return ""
	return cep.replace(/(\d{5})(\d{3})/, "$1-$2")
}

