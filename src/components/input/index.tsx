import { UseFormRegister } from "react-hook-form";
import styles from './styles.module.scss'

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    register:  UseFormRegister<any>,
    errors?: string
}

export function Input({type, name, placeholder, errors, register}: InputProps) {
    return (
        <div className={styles.container}>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className={styles.input}
            />

            {errors ? <span className={styles.messageError}>{errors}</span> : ""}
        </div>
    )
}