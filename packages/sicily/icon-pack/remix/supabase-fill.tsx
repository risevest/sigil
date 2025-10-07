import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3.084 15.25c-1.664 0-2.6-1.912-1.58-3.226L10.21.806C10.794.054 12 .466 12 1.42V8.75h8.916c1.663 0 2.6 1.912 1.58 3.226L13.79 23.194c-.584.752-1.79.34-1.79-.613V15.25z" />
    </svg>
  )
})
Icon.displayName = 'SupabaseFill'
/**
 * Remix Icon: Supabase Fill
 * @see {@link https://remixicon.com/icon/supabase-fill Remix Icon Docs}
 */
export const SupabaseFill = Icon
