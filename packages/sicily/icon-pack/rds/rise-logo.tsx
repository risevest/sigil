import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <rect width={32} height={32} fill="#006D79" rx={16} />
      <path
        fill="#fff"
        d="m13.017 14.477-.1-5.263H10V23h3.017v-5.424c.074-4.194 1.557-5.557 5.538-5.824V9c-3.56 0-4.87 1.47-5.44 5.477zM24 10.75c0 .966-.696 1.75-1.555 1.75-.86 0-1.556-.784-1.556-1.75S21.585 9 22.445 9C23.304 9 24 9.784 24 10.75"
      />
    </svg>
  )
})
Icon.displayName = 'RiseLogo'
export const RiseLogo = Icon
