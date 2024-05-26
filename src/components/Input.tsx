import { InputHTMLAttributes, forwardRef, useId } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	helperText?: string
	className?: string
}


export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ name = '', type = '', label = '', helperText = '', className = '', ...props }, ref) => {
		const inputId = useId()
		return (
			<div className="flex flex-col w-full">
				<label className="mb-2 text-[#F7F7FA]" htmlFor={inputId}>{label}</label>
				<input
					className={`py-3 px-4 text-[#F7F7FA] rounded-full placeholder:text-zinc-500 outline-none ${className}`}
					id={inputId}
					type={type}
					name={name}
					ref={ref}
					{...props}
				/>
				<p className="text-red-600 mt-1 ml-3 h-4">{helperText || '\u00A0'}</p>
			</div>
		)
	}
)
