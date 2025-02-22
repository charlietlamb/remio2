'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { zodValidator } from '@tanstack/zod-form-adapter'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
})

export function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values)
    },
    validatorAdapter: zodValidator(),
    validators: {
      onChange: contactFormSchema,
    },
  })

  return (
    <div className="mb-12">
      <h2 className="font-heading mb-4 text-2xl font-semibold">
        Send Us a Message
      </h2>
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <div>
          <form.Field name="name">
            {(field) => (
              <Input
                name={field.name}
                value={field.state.value ?? ''}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Your Name"
                className="w-full"
              />
            )}
          </form.Field>
        </div>
        <div>
          <form.Field name="email">
            {(field) => (
              <Input
                name={field.name}
                value={field.state.value ?? ''}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Your Email"
                className="w-full"
              />
            )}
          </form.Field>
        </div>
        <div>
          <form.Field name="message">
            {(field) => (
              <Textarea
                name={field.name}
                value={field.state.value ?? ''}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Your Message"
                className="w-full min-h-[150px]"
              />
            )}
          </form.Field>
        </div>
        {Object.entries(form.state.errors).map(([field, error]) => (
          <p
            key={field}
            className={field === 'name' ? 'text-destructive' : 'text-primary'}
          >
            {typeof error === 'string' ? error : ''}
          </p>
        ))}
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  )
}
