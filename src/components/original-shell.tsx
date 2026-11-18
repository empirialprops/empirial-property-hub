import { ThemeProvider } from '@/components/theme-provider';
import NavBar from '@/components/navbar';
import { OfferPosterModal } from '@/components/offer-poster-modal';
import { SupportBot } from '@/components/support-bot/support-bot';
import { SparkleToastAd } from '@/components/ads/sparkle-toast-ad';
import { ReferralTracker } from '@/components/referral-tracker';
import { BrandingSync } from '@/components/branding-sync';
import { TelemetryTracker } from '@/components/analytics/telemetry-tracker';
import type { ReactNode } from 'react';
import AdminLayout from '@/components/admin/original-layout';
import { usePathname } from '@/lib/compat/navigation';
export default function OriginalShell({children}: {children: ReactNode}) {
 const pathname = usePathname();
 return <ThemeProvider attribute="class" defaultTheme="dark" enableSystem><BrandingSync /><ReferralTracker /><TelemetryTracker /><NavBar /><OfferPosterModal /><SupportBot /><SparkleToastAd /><main className="min-h-screen w-full bg-background">{pathname.startsWith('/admin') ? <AdminLayout>{children}</AdminLayout> : children}</main></ThemeProvider>;
}