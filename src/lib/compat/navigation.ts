import { useLocation, useNavigate, useParams as routerParams, notFound as routerNotFound, useRouter as tanstackRouter } from '@tanstack/react-router';
import { useMemo } from 'react';
export function usePathname() { return useLocation().pathname; }
export function useSearchParams() { const search = useLocation().searchStr; return useMemo(() => new URLSearchParams(search), [search]); }
export function useParams() { return routerParams({strict:false}); }
export function useRouter() { const navigate = useNavigate(); const router = tanstackRouter(); return useMemo(() => ({push: (to:string) => navigate({to}), replace:(to:string) => navigate({to,replace:true}), back:() => window.history.back(), refresh:() => router.invalidate(), prefetch: (to:string) => router.preloadRoute({to})}), [navigate,router]); }
export function notFound(): never { throw routerNotFound(); }
