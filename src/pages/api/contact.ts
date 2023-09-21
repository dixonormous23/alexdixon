import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

import { CONTACT_EMAIL_ADDRESS } from '@/constants';

type Data = {
    message: string;
}

interface EmailHtmlProps {
    name: string;
    email: string;
    message: string;
}

const html = ({ name, email, message }: EmailHtmlProps): string => {
    return `
        <div>
            <h1>New portfolio site submission!</h1>
            <strong>From:</strong>
            <p>- ${name}</p>
            <strong>Email:</strong>
            <p>- ${email}</p>
            <strong>Message:</strong>
            <p>- ${message}</p>
        </div>
    `;
};

export default function sendEmail(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const apiKey = process.env.SENDGRID_API_KEY;

    if (!apiKey) return res.status(400).json({ message: 'Invalid API key' });

    const { name, email, message } = req.body;

    sendgrid.setApiKey(apiKey);

    const msg = {
        to: CONTACT_EMAIL_ADDRESS,
        from: 'info@flospace.io',
        subject: 'New Portfolio Site Contact Form Submission',
        html: html({ name, email, message })
    }

    sendgrid.send(msg)
        .then(() => res.status(200).json({ message: 'success' }))
        .catch((error) => {
            res.status(400).json({ message: 'Something went wrong, please try again later.' })
            console.error(error)
        })
}
