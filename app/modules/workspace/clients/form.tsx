import { Form } from 'react-router';

import { Input } from '@shadcn-ui/input';
import { Label } from '@shadcn-ui/label';

export function ClientForm() {
	return (
		<Form className='space-y-6'>
			<div className="space-y-2">
				<Label>Nome</Label>
				<Input
					name="name"
					placeholder="ex: João Da Dilva"
					// defaultValue={client?.name}
				/>
			</div>

			<div className="space-y-2">
				<Label>Email</Label>
				<Input
					name="email"
					placeholder="ex: jo123@gmail.com"
					// defaultValue={client?.email}
				/>
			</div>

			<div className="space-y-2">
				<Label>Telefone</Label>
				<Input
					name="phone"
					placeholder="ex: (61) 9.9999-9999"
					// defaultValue={client?.phone}
				/>
			</div>

			<div className="space-y-2">
				<Label>CPF</Label>
				<Input
					name="cpf"
					placeholder="ex: 000.000.000-00"
					// defaultValue={client?.cpf}
				/>
			</div>

			<fieldset>
				<legend className="text-zinc-500">Endereço</legend>
				<div className="flex gap-5">
					<div className="flex space-y-2">
						<Label>CEP</Label>
						<Input
							name="cep"
							placeholder="ex: 00.000-000"
							// defaultValue={client?.address?.cep}
						/>
					</div>

					<div className="space-y-2">
						<Label>Número</Label>
						<Input
							name="number"
							type="number"
							placeholder="ex: 15"
							// defaultValue={client?.address?.number}
						/>
					</div>
				</div>
			</fieldset>
		</Form>
	);
}
