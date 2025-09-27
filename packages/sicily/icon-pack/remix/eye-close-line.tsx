import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m9.343 18.782-1.932-.518.787-2.939a11 11 0 0 1-3.237-1.872l-2.153 2.154-1.414-1.414 2.153-2.154a10.96 10.96 0 0 1-2.371-5.07l1.968-.359C3.903 10.813 7.579 14 12 14s8.098-3.187 8.857-7.39l1.968.358a10.96 10.96 0 0 1-2.372 5.071l2.154 2.154-1.414 1.414-2.154-2.154a11 11 0 0 1-3.237 1.872l.788 2.94-1.932.517-.788-2.94a11 11 0 0 1-3.74 0z" />
    </svg>
  )
})
Icon.displayName = 'EyeCloseLine'
/**
 * Remix Icon: Eye Close Line
 * @see {@link https://remixicon.com/icon/eye-close-line Remix Icon Docs}
 */
export const EyeCloseLine = Icon
