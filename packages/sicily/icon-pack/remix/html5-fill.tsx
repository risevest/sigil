import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 18.178 4.62-1.256.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866-2.52.667-2.52-.667-.158-1.844h-2.27l.329 3.544zM3 2h18l-1.623 18L12 22l-7.377-2z" />
    </svg>
  )
})
Icon.displayName = 'Html5Fill'
/**
 * Remix Icon: Html5 Fill
 * @see {@link https://remixicon.com/icon/html5-fill Remix Icon Docs}
 */
export const Html5Fill = Icon
