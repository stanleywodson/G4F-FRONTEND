import { ComponentProps } from "react"

type InputPrefixProps = ComponentProps<"div">
export function InputPrefix(props: InputPrefixProps) {
	return (
		<div {...props} />
	)
}

type InputControlProps = ComponentProps<"input">
export function InputControl(props: InputControlProps) {
	return (
		<input
			type="text"
			className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-[#F7F7FA]"
			{...props}
		/>
	)
}

export type InputRootProps = ComponentProps<"div">
export function InputRoot(props: InputRootProps) {
	console.log(props.className);
	

	return (
		<div className={'flex mx-1 w-full h-16 items-center gap-2 rounded-full border-2 border-[#29E0A9] py-2 px-3 shadow-sm' + props.className}
			{...props}
		/>

	)
}

