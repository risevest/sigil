import { memo } from 'react'
import type { IconProps } from '../../types'
const AccountBalance = /* @__PURE__ */ memo(function AccountBalance(_props: IconProps) {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 25 24" width="1em" height="1em" {...props}>
      <mask
        id="a"
        width={25}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path d="M.891 0h24v24h-24z" />
      </mask>
      <g mask="url(#a)">
        <path d="M5.89 17v-7h2v7zm6 0v-7h2v7zm-9 4v-2h20v2zm15-4v-7h2v7zm-15-9V6l10-5 10 5v2z" />
      </g>
    </svg>
  )
})
export { AccountBalance }
