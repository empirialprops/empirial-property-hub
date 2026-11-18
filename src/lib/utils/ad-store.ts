import { AdvertisementConfig, AdvertisementTemplate } from '@/lib/types/advertisement';

export const TEMPLATE_PRESETS: Record<AdvertisementTemplate, Omit<AdvertisementConfig, 'updatedAt'>> = {
  deal: {
    enabled: true,
    template: 'deal',
    showSpotlightCard: true,
    showSlideToast: true,
    showInFeedCards: true,
    inFeedFrequency: 6,
    sparkleDensity: 'standard',
    badge: '⚡ FLASH DEAL',
    title: '20% OFF All Challenges',
    subtitle: 'Verified discount. Instant credentials and 90% profit split.',
    firmName: 'Velotrade',
    logoUrl: '/__l5e/assets-v1/02d5ed83-17ff-478e-8bc6-84220ba28acc/velotrade.svg',
    discountTag: '20% OFF',
    couponCode: 'EMPIRIAL',
    ctaText: 'Claim Deal →',
    ctaLink: 'https://velotrade.com/?ref=empirial',
    benefits: [
      'No Minimum Trading Days',
      '90% Profit Split Guaranteed',
      'Fast Bi-Weekly Crypto/Bank Payouts',
    ],
    backgroundImageUrl: '/__l5e/assets-v1/5d32d149-1120-4ab6-bbcd-9f7e996dfb61/original-7626288515399729217.png',
    backgroundPosition: 'watermark-right',
    backgroundMaskFade: true,
    glassOpacity: 25,
    sparkleAnimation: true,
    autoDismissSeconds: 5,
    toastPosition: 'bottom-right',
  },
  'rule-update': {
    enabled: true,
    template: 'rule-update',
    showSpotlightCard: true,
    showSlideToast: true,
    showInFeedCards: true,
    inFeedFrequency: 6,
    sparkleDensity: 'standard',
    badge: '🛡️ RULE UPDATE',
    title: 'Weekend & News Trading Unrestricted',
    subtitle: 'Alpha Capital policy revision: Zero restrictions on overnight holding.',
    firmName: 'Alpha Capital',
    logoUrl: '/__l5e/assets-v1/3be0eac6-f912-4f3f-8c5f-dca706baa846/alpha-capital.png',
    discountTag: 'POLICY REVISED',
    couponCode: 'EMPIRIAL',
    ctaText: 'View New Rules →',
    ctaLink: '/firms/alpha-capital',
    benefits: [
      'Overnight & Weekend Holding Unrestricted',
      'High-Impact News Trading Permitted',
      'EA & Algorithmic Trading Friendly',
    ],
    backgroundImageUrl: '/__l5e/assets-v1/5d32d149-1120-4ab6-bbcd-9f7e996dfb61/original-7626288515399729217.png',
    backgroundPosition: 'watermark-right',
    backgroundMaskFade: true,
    glassOpacity: 25,
    sparkleAnimation: true,
    autoDismissSeconds: 6,
    toastPosition: 'bottom-right',
  },
  feature: {
    enabled: true,
    template: 'feature',
    showSpotlightCard: true,
    showSlideToast: true,
    showInFeedCards: true,
    inFeedFrequency: 6,
    sparkleDensity: 'standard',
    badge: '✨ NEW FEATURE',
    title: 'Live Payout Proof Explorer',
    subtitle: 'Track real-time withdrawal receipts and transaction hashes across all firms.',
    firmName: 'EMPIRIAL',
    logoUrl: '/__l5e/assets-v1/6239cd14-e0fd-4226-b69d-44313547bbeb/empirial-trident-dark.png',
    useEmpirialLogo: true,
    graphicIcon: 'sparkles',
    discountTag: 'NOW LIVE',
    ctaText: 'Explore Payouts →',
    ctaLink: '/firms',
    benefits: [
      'Verified On-Chain & Bank Receipts',
      'Filter By Firm & Payout Method',
      'Updated Daily by Trader Community',
    ],
    backgroundImageUrl: '/__l5e/assets-v1/5d32d149-1120-4ab6-bbcd-9f7e996dfb61/original-7626288515399729217.png',
    backgroundPosition: 'watermark-right',
    backgroundMaskFade: true,
    glassOpacity: 25,
    sparkleAnimation: true,
    autoDismissSeconds: 5,
    toastPosition: 'bottom-right',
  },
  custom: {
    enabled: true,
    template: 'custom',
    showSpotlightCard: true,
    showSlideToast: true,
    showInFeedCards: true,
    inFeedFrequency: 6,
    sparkleDensity: 'standard',
    badge: '📢 ANNOUNCEMENT',
    title: 'Special Prop Trading Announcement',
    subtitle: 'Custom promotional headline or announcement customized by the EMPIRIAL management team.',
    firmName: 'EMPIRIAL Spotlight',
    logoUrl: '/__l5e/assets-v1/ca488225-3311-459c-bfce-cb9edd309303/__l5e/assets-v1/ca488225-3311-459c-bfce-cb9edd309303/__l5e/assets-v1/ca488225-3311-459c-bfce-cb9edd309303/__l5e/assets-v1/ca488225-3311-459c-bfce-cb9edd309303/favicon.ico',
    discountTag: 'FEATURED',
    ctaText: 'Learn More →',
    ctaLink: '/challenges',
    benefits: [
      'Verified Evaluation Guidelines',
      'Exclusive Community Benefits',
      '24/7 Dedicated Trader Support',
    ],
    backgroundImageUrl: '/__l5e/assets-v1/5d32d149-1120-4ab6-bbcd-9f7e996dfb61/original-7626288515399729217.png',
    backgroundPosition: 'watermark-right',
    backgroundMaskFade: true,
    glassOpacity: 25,
    sparkleAnimation: true,
    autoDismissSeconds: 5,
    toastPosition: 'bottom-right',
  },
};

export const DEFAULT_AD_CONFIG: AdvertisementConfig = {
  ...TEMPLATE_PRESETS.deal,
  updatedAt: 1,
};

const STORAGE_KEY = 'empirial_advertisement_config';

export function getStoredAdConfig(): AdvertisementConfig {
  if (typeof window === 'undefined') return DEFAULT_AD_CONFIG;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_AD_CONFIG;
    return { ...DEFAULT_AD_CONFIG, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_AD_CONFIG;
  }
}

export function saveStoredAdConfig(config: AdvertisementConfig): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    window.dispatchEvent(new CustomEvent('empirial-ad-changed', { detail: config }));
  } catch (err) {
    console.warn('Failed to save ad config to localStorage:', err);
  }
}

