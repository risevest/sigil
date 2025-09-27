import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 2 9.3 3.32-1.418 12.31L12 22 4.12 17.63 2.7 5.32zm0 2.21L6.186 17.26h2.168l1.169-2.92h4.935l1.168 2.92h2.168zm1.698 8.33h-3.396L12 8.45z" />
    </svg>
  )
})
Icon.displayName = 'AngularjsFill'
/**
 * Remix Icon: Angularjs Fill
 * @see {@link https://remixicon.com/icon/angularjs-fill Remix Icon Docs}
 */
export const AngularjsFill = Icon
