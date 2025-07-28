import { Input } from '@shadcn-ui/input';
import { Label } from '@shadcn-ui/label';
import { Form } from 'react-router';

export function ClientForm() {
	return (
		<Form className='space-y-6 *:space-y-6'>
			<fieldset>
				<legend className='w-full'>
					<span className='text-nowrap'>Personal info</span>
					<div className='h-px w-1/2 bg-foreground/80'></div>
				</legend>

				<div className='space-y-2'>
					<Label>Nome</Label>
					<Input
						name='name'
						placeholder='ex: João Da Dilva'
						// defaultValue={client?.name}
					/>
				</div>

				<div className='space-y-2'>
					<Label>Email</Label>
					<Input
						name='email'
						placeholder='ex: jo123@gmail.com'
						// defaultValue={client?.email}
					/>
				</div>

				<div className='space-y-2'>
					<Label>Telefone</Label>
					<Input
						name='phone'
						placeholder='ex: (61) 9.9999-9999'
						// defaultValue={client?.phone}
					/>
				</div>

				<div className='space-y-2'>
					<Label>CPF</Label>
					<Input
						name='cpf'
						placeholder='ex: 000.000.000-00'
						// defaultValue={client?.cpf}
					/>
				</div>
			</fieldset>

			<fieldset>
				<legend className='w-full'>
					<span className='text-nowrap'>Address</span>
					<div className='h-px w-3/4 bg-foreground/80'></div>
				</legend>

				<div className='flex gap-5'>
					<div className='space-y-2'>
						<Label>CEP</Label>
						<Input
							name='cep'
							placeholder='ex: 00.000-000'
							// defaultValue={client?.address?.cep}
						/>
					</div>

					<div className='space-y-2'>
						<Label>Número</Label>
						<Input
							name='number'
							type='number'
							placeholder='ex: 15'
							// defaultValue={client?.address?.number}
						/>
					</div>
				</div>
			</fieldset>
		</Form>
	);
}
