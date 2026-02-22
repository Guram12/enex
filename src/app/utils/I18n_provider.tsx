'use client';

import './I18n';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return <>{children}</>;
}