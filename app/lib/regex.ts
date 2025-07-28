export const regex = {
	firstLetterOfEachWord: /\b\w/g,
	name: /^[a-zA-ZÀ-ÿ\s]+$/,
	phone: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
	cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
	cep: /^\d{5}-\d{3}$/,
};
