import { describe, expect, it } from 'vitest';
import { cn, formatCurrency, formatNumber } from '@/lib/utils';
describe('Imported formatting utilities', () => {
 it('returns a formatted currency string for a numeric amount', () => { expect(formatCurrency(5000)).toBe('$5,000'); });
 it('returns a formatted number string', () => { expect(formatNumber(200000)).toBe('200,000'); });
 it('merges conflicting classes into a string', () => { expect(cn('px-2', 'px-4')).toBe('px-4'); });
});
