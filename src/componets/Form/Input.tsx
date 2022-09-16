import { InputHTMLAttributes } from "react";
//como e um elemento nativo HMTL poderiamos passar todo elementos, para isso no REACT podemos criar uma interface
// e ela vai exntender InputHTMLAttributes do REACT e ele precisa receber no generics HTMLInputElement um tipo global do typeScripr
interface InputsProps extends InputHTMLAttributes<HTMLInputElement> { }

// para nao ficar passando 1por 1 poss passar uma expredOperator
export function Input(props : InputsProps) {
    return (
        <input
            {...props}
            className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
        />
    );
}