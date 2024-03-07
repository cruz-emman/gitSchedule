import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Checkbox } from './ui/checkbox';
import AppointmentForm from './AppointmentForm';

interface DataPropsForInput {
    id: string,
    label: string

}

interface CheckboxAppointmentFormProps {
    control: any;
    name: string;
    label: string;

    //
    data: DataPropsForInput[]


    //
    inputData: any //this state to open the others
    setInputData: any // Assuming setInputData is a function that accepts a string
    inputName: string
    inputPlaceholder: string,
    inputType: string,
    inputAssitance: string,
    
  }

export default function CheckboxAppointmentForm({
    control,
    name,
    label,
    data,
    inputData,
    setInputData,
    inputName,
    inputPlaceholder,
    inputType,
    inputAssitance
} : CheckboxAppointmentFormProps) {
  return (
    <FormField
    control={control}
    name={name}
    render={() => (
      <FormItem>
        <div className="mb-4">
          <FormLabel className="text-base">
            {label}
          </FormLabel>
        </div>

        {data.map((item) => (
          <FormField
            key={item.id}
            control={control}
            name="items"
            render={({ field }) => {
              return (
                <FormItem
                  key={item.id}
                  className="flex flex-row items-start space-x-3 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(item.id)}
                      onCheckedChange={(checked) => {
                        if (Array.isArray(field.value)) {
                          field.onChange(
                            checked
                              ? [...field.value, item.id]
                              : field.value.filter(
                                  (value) => value !== item.id
                                )
                          );
                        } else {
                          field.onChange(
                            checked ? [item.id] : []
                          );
                        }
                        setInputData(
                          checked && item.id === "6"
                        );
                      }}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    {item.label}
                  </FormLabel>
                </FormItem>
              );
            }}
          />
        ))}

        {/* Render AppointmentForm only if inputDataService is true */}
        {inputData && (
           <AppointmentForm
             name={inputName}
             placeholder={inputPlaceholder}
             type={inputType}
             label={inputAssitance}
             control={control}
           />
        )}

        <FormMessage />
      </FormItem>
    )}
  />
  )
}
