import ContactListItem from '@/components/Contact/ContactListItem';
import Form from '@/components/Contact/Form';
import Title from '@/components/Title';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Muhammad Amir',
};

type SocialMedia = {
  name: string;
  username: string;
  url: string;
};

const contents: SocialMedia[] = [
  {
    name: 'GitHub',
    username: 'MhmmdAmier',
    url: 'https://github.com/MhmmdAmier',
  },
  {
    name: 'Telegram',
    username: '@MSM8917',
    url: 'https://t.me/MSM8917',
  },
  {
    name: 'Twitter',
    username: '@amier_san09',
    url: 'https://twitter.com/amier_san09',
  },
  {
    name: 'Instagram',
    username: 'amier_san09',
    url: 'https://instagram.com/amier_san09',
  },
  {
    name: 'LinkedIn',
    username: 'Muhammad Amir',
    url: 'https://www.linkedin.com/in/mhmmdamir',
  },
  {
    name: 'Facebook',
    username: 'Muhammad Amier',
    url: 'https://www.facebook.com/Amierrockability',
  },
  {
    name: 'Email',
    username: 'muhammad.amier2002@gmail.com',
    url: 'mailto:muhammad.amier2002@gmail.com',
  },
];

export type Contact = (typeof contents)[number];

const ContactPage = () => {
  return (
    <main className="space-y-10">
      <div className="space-y-4">
        <Title>Contact</Title>
        <p className="dark:text-gray-200 text-light-fg-secondary">
          Please don’t hesitate to get in touch with me by following my social
          media below:
        </p>
        <div className="ml-8 text-base font-normal dark:text-gray-200 text-light-fg-secondary">
          <ul className="space-y-2 list-disc list-outside">
            {contents.map((content) => (
              <ContactListItem content={content} key={content.name} />
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-4">
        <Title>Message</Title>
        <div>
          <Form />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;