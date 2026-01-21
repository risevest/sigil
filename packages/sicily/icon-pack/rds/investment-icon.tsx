import { memo } from 'react'
import type { IconProps } from '../../types'
const InvestmentIcon = /* @__PURE__ */ memo(function InvestmentIcon(_props: IconProps) {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 18 18" width="1em" height="1em" {...props}>
      <path
        fill="currentColor"
        d="M9.835 8.166V3.999L5.668 9.833h2.5v4.166l4.167-5.833zM9 17.333a8.333 8.333 0 1 1 0-16.667 8.333 8.333 0 0 1 0 16.667"
      />
    </svg>
  )
})
export { InvestmentIcon }
