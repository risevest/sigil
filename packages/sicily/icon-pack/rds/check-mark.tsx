import { memo } from 'react'
import type { IconProps } from '../../types'
const CheckMark = /* @__PURE__ */ memo(function CheckMark(_props: IconProps) {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" {...props}>
      <rect width={20} height={20} rx={10} />
      <path d="M6 11.267 8.311 13.4 14 7" />
    </svg>
  )
})
export { CheckMark }
