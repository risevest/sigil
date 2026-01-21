import { memo } from 'react'
import type { IconProps } from '../../types'
const PageSeparator = /* @__PURE__ */ memo(function PageSeparator(_props: IconProps) {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 21v-4H7v4H5v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5zM7 3v4h10V3h2v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3zM2 9l4 3-4 3zm20 0v6l-4-3z" />
    </svg>
  )
})
/**
 * Remix Icon: Page Separator
 * @see {@link https://remixicon.com/icon/page-separator Remix Icon Docs}
 */
export { PageSeparator }
