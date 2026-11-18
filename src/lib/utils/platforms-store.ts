'use client';

export interface PlatformItem {
  id: string;
  name: string;
  logo: string;
  logo_url?: string;
  type?: 'forex' | 'futures' | 'both';
  is_active?: boolean;
  description?: string;
  created_at?: string;
}

export const DEFAULT_PLATFORMS: PlatformItem[] = [
  { id: 'mt5', name: 'MetaTrader 5', logo: '/__l5e/assets-v1/25588718-cf0d-4ce2-8e2e-1b474a803ee9/original-4151423416303213131.png', type: 'forex', is_active: true },
  { id: 'mt4', name: 'MetaTrader 4', logo: '/__l5e/assets-v1/25588718-cf0d-4ce2-8e2e-1b474a803ee9/original-4151423416303213131.png', type: 'forex', is_active: true },
  { id: 'ctrader', name: 'cTrader', logo: '/__l5e/assets-v1/b6b95763-93b9-4d72-941c-c08923e85ba6/original-3564647814203939065.svg', type: 'forex', is_active: true },
  { id: 'match-trader', name: 'Match-Trader', logo: '/__l5e/assets-v1/51f3eff1-8813-4155-9aa9-2ee3c56ddf96/original-244516311068651451.svg', type: 'forex', is_active: true },
  { id: 'tradelocker', name: 'TradeLocker', logo: '/__l5e/assets-v1/5d123cbe-225f-48a5-a34b-0afeae53cc18/original-4631824291017350932.jpeg', type: 'forex', is_active: true },
  { id: 'tradingview', name: 'TradingView', logo: '/__l5e/assets-v1/55ceff57-fb41-4ec5-8423-0ce7bc36250f/original-7932679435441886074.png', type: 'both', is_active: true },
  { id: 'tradovate', name: 'Tradovate', logo: '/__l5e/assets-v1/b4530f91-0fdd-4f7f-ac64-5f69cdf41a9c/original-5476902471793772959.png', type: 'futures', is_active: true },
  { id: 'ninjatrader', name: 'NinjaTrader', logo: '/__l5e/assets-v1/d80ca677-7f50-4722-a56e-0b7984ca4000/original-452704939981264971.svg', type: 'futures', is_active: true },
  { id: 'bookmap', name: 'Bookmap', logo: '/__l5e/assets-v1/a2fe9f8d-e78a-4fe9-97ec-4112c7f4a429/original-6106112915952677202.jpeg', type: 'futures', is_active: true },
  { id: 'atas', name: 'ATAS', logo: '/__l5e/assets-v1/6690badb-3897-448d-8d07-869138b12f29/original-8471122311315368250.jpeg', type: 'futures', is_active: true },
  { id: 'multicharts', name: 'MultiCharts', logo: '/__l5e/assets-v1/8ff1272d-92df-4ff0-8397-86da34d1fd01/original-5010571990133852007.svg', type: 'futures', is_active: true },
  { id: 'deepcharts', name: 'DeepCharts', logo: '/__l5e/assets-v1/603af466-3133-42f3-8ae7-740e03cacba4/original-8751681620737367421.jpeg', type: 'futures', is_active: true },
];

const STORAGE_KEY = 'empirial_platforms_list';
const INITIALIZED_KEY = 'empirial_platforms_initialized';

export function getStoredPlatforms(): PlatformItem[] {
  if (typeof window === 'undefined') return DEFAULT_PLATFORMS;
  try {
    const isInit = localStorage.getItem(INITIALIZED_KEY);
    const raw = localStorage.getItem(STORAGE_KEY);

    if (isInit === 'true' && raw) {
      const parsed: PlatformItem[] = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Ensure default platforms exist in list if missing
        const existingIds = new Set(parsed.map((p) => p.id));
        const missing = DEFAULT_PLATFORMS.filter((d) => !existingIds.has(d.id));
        if (missing.length > 0) {
          const merged = [...parsed, ...missing];
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          return merged;
        }
        return parsed;
      }
    }

    localStorage.setItem(INITIALIZED_KEY, 'true');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PLATFORMS));
    return DEFAULT_PLATFORMS;
  } catch {
    return DEFAULT_PLATFORMS;
  }
}

export function saveStoredPlatforms(platforms: PlatformItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(INITIALIZED_KEY, 'true');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(platforms));
    window.dispatchEvent(new CustomEvent('empirial_platforms_changed', { detail: platforms }));

    // Async sync to Firestore if configured
    import('@/lib/firebase/config').then(({ db }) => {
      if (db) {
        import('firebase/firestore').then(({ doc, setDoc }) => {
          platforms.forEach((plat) => {
            const docRef = doc(db, 'platforms', plat.id);
            setDoc(docRef, {
              ...plat,
              updated_at: new Date().toISOString(),
            }, { merge: true }).catch(() => {});
          });
        });
      }
    }).catch(() => {});
  } catch (err) {
    console.error('Failed to save platforms:', err);
  }
}

export function addStoredPlatform(platform: Omit<PlatformItem, 'id'> & { id?: string }): PlatformItem {
  const current = getStoredPlatforms();
  const id = platform.id || platform.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  const newPlat: PlatformItem = {
    ...platform,
    id,
    is_active: platform.is_active ?? true,
    created_at: new Date().toISOString(),
  };

  const updated = [newPlat, ...current.filter((p) => p.id !== id)];
  saveStoredPlatforms(updated);
  return newPlat;
}

export function updateStoredPlatform(id: string, updates: Partial<PlatformItem>): PlatformItem | null {
  const current = getStoredPlatforms();
  const index = current.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const updatedItem: PlatformItem = {
    ...current[index],
    ...updates,
  };
  current[index] = updatedItem;
  saveStoredPlatforms(current);
  return updatedItem;
}

export function deleteStoredPlatform(id: string): boolean {
  const current = getStoredPlatforms();
  const updated = current.filter((p) => p.id !== id);
  if (updated.length === current.length) return false;
  saveStoredPlatforms(updated);

  // Attempt delete from Firestore
  import('@/lib/firebase/config').then(({ db }) => {
    if (db) {
      import('firebase/firestore').then(({ doc, deleteDoc }) => {
        deleteDoc(doc(db, 'platforms', id)).catch(() => {});
      });
    }
  }).catch(() => {});

  return true;
}

export function getPlatformDictionary(): Record<string, { name: string; logo: string; type: 'forex' | 'futures' | 'both' }> {
  const platforms = getStoredPlatforms();
  const dict: Record<string, { name: string; logo: string; type: 'forex' | 'futures' | 'both' }> = {};
  platforms.forEach((p) => {
    dict[p.id] = {
      name: p.name,
      logo: p.logo,
      type: p.type || 'forex',
    };
  });
  return dict;
}
