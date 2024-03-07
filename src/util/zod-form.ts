import { z } from "zod";

export const formSchema = z.object({
    eventTitle: z
        .string()
        .min(5, { message: "Input is too short, please provide at least 5 characters" })
        .max(100, { message: "Input is too long, please provide proper characters"}),

   
    email: z
        .string()
        .min(5, { message: "Input is too short, please provide at least 5 characters" })
        .max(100, { message: "Input is too long, please provide proper characters"}),

    fullName: z
        .string()
        .min(5, { message: "Input is too short, please provide at least 5 characters" })
        .max(100, { message: "Input is too long, please provide proper characters"}),
    department: z
        .string()
        .min(3, { message: "Input is too short, please provide at least 5 characters" })
        .max(100, { message: "Input is too long, please provide proper characters"}),


    dateRequested: z
    .string(),
    dateOfEvent: z
        .string(),


    meetingType: z.string(),

    startTimeOfEvent: z
        .string()
        .min(5, { message: "Please specify a valid time." })
        .max(100, { message: "Please specify a valid time." }),
    endTimeOfEvent: z
        .string()
        .min(5, { message: "Please specify a valid time." })
        .max(100, { message: "Please specify a valid time." }),

    //Optional Part
    dryRunDate: z.string().optional(),
    dryRunstartTimeOfEvent: z
        .string()
 
        .optional(),

    dryRunendTimeOfEvent: z
        .string()

        .optional(),


    
    
    otherTechAssit: z
                    .string()
                    .optional(),

    purpose: z.enum(['meeting', 'webinar', 'hybrid']),

    items: z.array(z.string()).optional(),
    
    dryRun: z
            .string()
            .optional(),
        
    meetingWebinar: z
                    .array(z.string())
                    .optional(),
    meetingWebinarLivestream: z.string().optional()                     
    
})
  

;
