import nodemailer from 'nodemailer';

export const transporterJobmoz = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: import.meta.env.VITE_MAIL_USERNAME,
        pass: import.meta.env.VITE_MAIL_PASSWORD,
    }
});
