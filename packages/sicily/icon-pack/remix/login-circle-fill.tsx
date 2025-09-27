import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 11H2.048c.502-5.053 4.765-9 9.95-9 5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.185 0-9.448-3.947-9.95-9h7.95v3l5-4-5-4z" />
    </svg>
  )
})
Icon.displayName = 'LoginCircleFill'
/**
 * Remix Icon: Login Circle Fill
 * @see {@link https://remixicon.com/icon/login-circle-fill Remix Icon Docs}
 */
export const LoginCircleFill = Icon
