import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/util/zod-form";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import useDatePicker from "@/util/store";
import AppointmentForm from "@/components/AppointmentForm";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import TableDataSample from "@/components/TableDataSample";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { meetingFeatures, webinarFeatures } from "@/util/data";
import CheckboxAppointmentFormService from "@/components/CheckboxAppointmentFormService";
import CheckboxAppointmentForm from "@/components/CheckboxAppointmentForm";

const items = [
  {
    id: "tcet",
    label: "TCET",
  },
  {
    id: "others",
    label: "Others",
  },
];

export default function Appointment() {
  const { dateOfEventPicker, dateOfRequestedPicker } = useDatePicker();

  const [showOthersInput, setShowOthersInput] = useState(false);
  const [openMeeting, setOpenMeeting] = useState(false);
  const [openWebinar, setOpenWebinar] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventTitle: "",
      email: "",
      fullName: "",
      department: "",

      //to be change
      dateRequested: dateOfRequestedPicker,
      dateOfEvent: dateOfRequestedPicker,

      meetingType: "",
      startTimeOfEvent: "",
      endTimeOfEvent: "",

      dryRunDate: "",
      dryRunstartTimeOfEvent: "",
      dryRunendTimeOfEvent: "",

      otherTechAssit: "",
      items: [],
      purpose: "meeting",
    },
  });

  const serviceType = form.watch("purpose");

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-11/12 h-full max-w-full pb-20 mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-row items-start justify-between w-full gap-2">
            <div className="flex flex-col w-full gap-2 ">
              <AppointmentForm
                name="eventTitle"
                placeholder="title of event"
                type="text"
                label="Title of Event"
                control={form.control}
              />

              <AppointmentForm
                name="email"
                placeholder="email"
                type="text"
                label="Email"
                control={form.control}
              />

              <AppointmentForm
                name="fullName"
                placeholder="Full Name"
                type="text"
                label="Full Name"
                control={form.control}
              />

              <AppointmentForm
                name="department"
                placeholder="Department"
                type="text"
                label="Department"
                control={form.control}
              />

              <AppointmentForm
                name="dateRequested"
                placeholder="Requested Date"
                type="text"
                label="Requested Date"
                disabled={true}
                control={form.control}
              />

              <AppointmentForm
                name="dateOfEvent"
                placeholder="Date of Event"
                type="text"
                label="Date of Event"
                disabled={true}
                control={form.control}
              />

              <FormField
                control={form.control}
                name="meetingType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purpose</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Purpose" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="c">Class Zoom / Gmeet</SelectItem>
                        <SelectItem value="acc">
                          Academic Culminating Classes
                        </SelectItem>
                        <SelectItem value="m">Meeting</SelectItem>
                        <SelectItem value="sd">
                          THS/College/Dept Events (Student Development / Co
                          Curricular)
                        </SelectItem>
                        <SelectItem value="fd">
                          CPD / Seminar / Training (Faculty Development)
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-2 pt-2">
                <Label>Time of Event</Label>
                <div className="flex flex-row gap-2">
                  <AppointmentForm
                    name="startTimeOfEvent"
                    placeholder="Start"
                    type="time"
                    label=""
                    control={form.control}
                  />
                  <AppointmentForm
                    name="endTimeOfEvent"
                    placeholder="End"
                    type="time"
                    label=""
                    control={form.control}
                  />
                </div>
              </div>

              <div className="flex items-start justify-between w-full">
                <div className="flex flex-1 w-full ">
                  <FormField
                    control={form.control}
                    name="dryRun"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>
                          (Optional) Preffered Meeting Date / Dry Run
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value || "none"}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="none" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                None / No
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>

                        {field.value === "yes" && (
                          <FormItem>
                            <div className="flex flex-col gap-2 pt-2">
                              <Label>(Dry Run) Time of Event</Label>
                              <div className="flex flex-row gap-2">
                                <AppointmentForm
                                  name="dryRunDate"
                                  placeholder="End"
                                  type="date"
                                  label=""
                                  control={form.control}
                                />
                                <AppointmentForm
                                  name="dryRunstartTimeOfEvent"
                                  placeholder="Start"
                                  type="time"
                                  label=""
                                  control={form.control}
                                />
                                <AppointmentForm
                                  name="dryRunendTimeOfEvent"
                                  placeholder="End"
                                  type="time"
                                  label=""
                                  control={form.control}
                                />
                              </div>
                            </div>
                          </FormItem>
                        )}

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1 w-full ">
                  <CheckboxAppointmentForm
                    control={form.control}
                    name="items"
                    data={items}
                    label="Tech Assistance"
                    inputData={showOthersInput}
                    setInputData={setShowOthersInput}
                    inputName="otherTechAssit"
                    inputPlaceholder="Assitance"
                    inputType="text"
                    inputAssitance="Assistance"
                  />

                 
                 
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 ">
              <div className="p-4 border-2 rounded-lg shadow-lg ">
                <TableDataSample />
              </div>

              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Service</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a meeting type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="meeting">Zoom Meeting</SelectItem>
                        <SelectItem value="webinar">Zoom Webinar</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {serviceType === "meeting" && (
                <div>
                  <CheckboxAppointmentFormService
                    control={form.control}
                    name="meetingWebinar"
                    data={meetingFeatures}
                    label="Zoom Webinar"
                    inputDataService={openMeeting}
                    setInputDataService={setOpenMeeting}
                    inputName="meetingWebinarLivestream"
                    inputPlaceholder="Link"
                    inputType="text"
                    inputAssitance="Link"
                  />
              
                </div>
              )}

              {serviceType === "webinar" && <div>
              <CheckboxAppointmentFormService
                    control={form.control}
                    name="meetingWebinar"
                    data={webinarFeatures}
                    label="Zoom Webinar"
                    inputDataService={openWebinar}
                    setInputDataService={setOpenWebinar}
                    inputName="meetingWebinarLivestream"
                    inputPlaceholder="Link"
                    inputType="text"
                    inputAssitance="Link"
                  />
                </div>
                }

              {serviceType === "hybrid" && <div>hybrid</div>}

              <Button className="text-white" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
