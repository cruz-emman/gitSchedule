import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";


// Define a union type of keys from AppointmentProps
type AppointmentKeys = keyof AppointmentProps;

export interface AppointmentFormProps {
    type: string;
    placeholder: string;
    required?: boolean;
    error: FieldError | undefined;
    // Adjust the name property to accept only keys from AppointmentProps
    name: AppointmentKeys;
    register: UseFormRegister<AppointmentProps>;
    disabled?: boolean
}
