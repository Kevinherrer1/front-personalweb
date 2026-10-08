import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './contact.css';
import Layout from '../layout/Layout';
import { useLanguage } from '../../i18n/useLanguage';
import avatar from './assets/avatar2.JPG';
import linkedin from './assets/linkedin.png';
import gmail from './assets/gmail.png';
import github from './assets/github.png';

const contactLinks = [
  { label: 'GitHub', value: 'Kevinherrer1', href: 'https://github.com/kevinherrer1', icon: github, external: true },
  { label: 'LinkedIn', value: 'Kevin Herrera Mantilla', href: 'https://www.linkedin.com/in/kevin-herrera-mantilla-9495633a6/', icon: linkedin, external: true },
  { labelKey: 'email', value: 'kevinherrerak14@gmail.com', icon: gmail, external: true },
];

const gmailComposeUrl = (to, subject, body) =>
  `https://mail.google.com/mail/u/0/?tf=cm&to=${encodeURIComponent(to)}` +
  `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function Contact() {
  const { t } = useLanguage();
  const getHref = (link) =>
    link.href ?? gmailComposeUrl(link.value, t.contact.emailSubject, t.contact.emailBody);

  return (
    <Layout title={t.titles.contact}>
      <div className="contact-body">
        <img src={avatar} alt="Kevin Herrera" className="contact-avatar reveal" />
        <div className="contact-info">
          {contactLinks.map((link, index) => (
            <a
              key={link.value}
              href={getHref(link)}
              className="box reveal"
              style={{ '--i': index + 1 }}
              {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <img src={link.icon} className="contact-icon" alt="" />
              <span className="box-text">
                <span className="box-label">{link.labelKey ? t.contact[link.labelKey] : link.label}</span>
                <span className="box-value">{link.value}</span>
              </span>
              <ArrowUpRight className="box-arrow" size={22} strokeWidth={2.5} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
