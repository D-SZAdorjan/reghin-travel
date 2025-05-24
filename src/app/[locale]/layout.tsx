// NextIntl
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import { getMessages } from "next-intl/server";
import {routing} from '@/i18n/routing';

import {notFound} from 'next/navigation';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider>
  );
}