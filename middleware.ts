import type { NextRequest } from 'next/server'

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'


export async function middleware(req: NextRequest) {
	const res = NextResponse.next()

	const supabase = createMiddlewareClient({ req, res })

	const url = new URL(req.url)
	const code = url.searchParams.get('code')

	if (code) {
		await supabase.auth.exchangeCodeForSession(code)
	}

	// Refresh session if expired - required for Server Components
	// https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
	await supabase.auth.getSession()

	return res
}