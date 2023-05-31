import z from 'zod'

export const commentSchema = z.object({
    content: z.string().nonempty().max(255).trim()
})