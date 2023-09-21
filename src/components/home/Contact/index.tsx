import React, { useState, useMemo } from 'react';

import { ContentSection } from "@/components/ContentSection";
import { UnderlinedText } from "@/components/common/UnderlinedText";
import { ThemedButton } from "@/components/common/ThemedButton";
import {
    ContactSubheading,
    ContactFormContainer,
    FormWrapper,
    InputWrapper,
    InputField,
    MessageField,
    SuccessMessage
} from './styles';

interface FormStateInterface {
    name: string;
    email: string;
    message: string;
}

export const ContactSection = (): React.ReactElement => {
    const [success, setSuccess] = useState<boolean>(false);
    const [submitting, setSubmitting] = useState<boolean>(false);

    const [formState, setFormState] = useState<FormStateInterface>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldName = e.target.name;

        setFormState((prev) => ({
            ...prev,
            [fieldName]: e.target.value
        }));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formState })
        });

        setSuccess(true);
    };

    const submitDisabled = useMemo(() => {
        const { name, email, message } = formState;
        return submitting || !(name && email && message);
    }, [formState, submitting]); 

    return (
        <ContentSection anchorId="contact" useVisibility>
            <ContactSubheading>
                <UnderlinedText text="Contact" />
                <p>Get in touch!</p>
            </ContactSubheading>
            <ContactFormContainer>
                <FormWrapper onSubmit={onSubmit}>
                    <InputWrapper>
                        <InputField
                            name="name"
                            placeholder="Name"
                            autoComplete="new-password"
                            onChange={handleChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputField
                            type="email"
                            name="email"
                            autoComplete="new-password"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <MessageField
                            name="message"
                            placeholder="Message"
                            rows={5}
                            onChange={handleChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <ThemedButton
                            as="button"
                            type="submit"
                            disabled={submitDisabled}
                        >
                            Send
                        </ThemedButton>
                    </InputWrapper>
                    {success ? (
                        <SuccessMessage>Success! Thank you for reaching out! 😄</SuccessMessage>
                    ) : null}
                </FormWrapper>
            </ContactFormContainer>
        </ContentSection>
    );
};
