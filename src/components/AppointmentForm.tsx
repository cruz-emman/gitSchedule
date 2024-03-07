// Separate component for form field
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface AppointmentFormProps {
  control: any;
  type: string
  name: string;
  placeholder: string;
  label: string;
  disabled?: boolean
}

export default function AppointmentForm({
  control,
  name,
  label,
  placeholder,
  type,
  disabled
}: AppointmentFormProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input disabled={disabled} type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
