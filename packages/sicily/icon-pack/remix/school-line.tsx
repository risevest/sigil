import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 .586 6 6V9h4v10h1v2H1v-2h1V9h4V6.586zM18 19h2v-8h-2zM6 11H4v8h2zm2-3.586V19h3v-7h2v7h3V7.414l-4-4z" />
    </svg>
  )
})
Icon.displayName = 'SchoolLine'
/**
 * Remix Icon: School Line
 * @see {@link https://remixicon.com/icon/school-line Remix Icon Docs}
 */
export const SchoolLine = Icon
